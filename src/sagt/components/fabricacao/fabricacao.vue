<template>
<v-card>
  <v-toolbar dense dark color="blue darken-3">
    <v-toolbar-title>Fabricação</v-toolbar-title>
  </v-toolbar>
  <v-container fluid>
    <v-row justify="center" align="start">
      <v-col cols="6" lg="6" sm="6" md="6" class="pt-0">
        <v-row>
          <v-col cols="12">
            <card-fabricacao @start="startTime" @stop="stopTime"/>
          </v-col>
          <v-col cols="12">
            <apexchart type="line" :options="chartOptions" :series="chartOptions.series"></apexchart>
          </v-col>
        </v-row>  
      </v-col>
      <v-col cols="6" class="pt-0">
        <v-row>
          <v-col cols="12">
            <v-card class="d-inline-block" width="100%" height="100">
              <v-row justify="start" align="center" no-gutters  style="height: 100px;">
                <v-col cols="2" class="text-left">
                  <v-avatar tile color="blue darken-1" height="100" width="110">
                    <v-row justify="center" no-gutters class="ma-1">
                    <span class="white--text mb-2">{{ dayOfWeek }}</span>
                    <span class="white--text display-1">{{ day }}</span>
                    </v-row>
                  </v-avatar>
                </v-col>
                <v-col cols="8" class="text-left display-1" v-if="atualTime !== 0">
                  <div><span class="mr-1 subtitle-1">Tempo decorrido:</span> {{ atualTime }}</div>
                  <div><span class="mr-4 subtitle-1">Tempo restante: </span>{{ restTime }}</div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12">
            <controles/>
          </v-col>
        </v-row>  
      </v-col>
    </v-row>
  </v-container>
</v-card>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment';
moment.locale('pt-BR');
let interval1 = 0;
let interval2 = 0;
export default {
  data: () => ({
    atualTime: 0,
    restTime: 0,
    counter: undefined,
    duracaoRampas: undefined
  }),
  methods: {
    stopTime () {
      clearInterval(this.counter);
      this.atualTime = 0;
      this.restTime = 0;
      interval1 = 0; 
      interval2 = 0;
    },
    startTime (duracao) {
      this.countTimer(duracao);
    },
    countTimer (duracao) {
      this.counter = setInterval(() => {
        this.atualTime = moment().hour(0).minute(0).second(interval1++).format('HH : mm : ss');
        this.restTime = moment().hour(duracao.split(':')[0]).minute(duracao.split(':')[1]).second(interval2--).format('HH : mm : ss');
      }, 1000);
    }
  },
  computed: {
    ...mapState('fabricacao', ['chartOptions']),
    dayOfWeek () {
      return moment().format('dddd');
    },
    day () {
      return moment().format('DD/MM');
    }
  },
}
</script>

<style>

</style>