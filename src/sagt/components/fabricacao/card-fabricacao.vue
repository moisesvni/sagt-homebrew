<template>
  <v-card class="mx-auto" max-height="200px">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="40px">
      <v-card-title class="body-1 white--text pt-2">Receita a ser executada.</v-card-title>
    </v-img>
    <v-container fluid class="mt-0 py-0">
      <v-row justify="center" align="center">
        <v-col cols="6" lg="6" sm="6" md="6">
          <v-autocomplete v-model="receita" :items="receitas" chips label="Receita" item-text="nome" item-value="receitaId" return-object>
          <template v-slot:selection="data">
            <v-chip v-bind="data.attrs" close @click="data.select" :input-value="data.selected" @click:close="remove(data.item)">
              <v-avatar left>
                <v-img :src="`https://i.picsum.photos/id/1011/200/200.jpg`"></v-img>
              </v-avatar>
              {{ data.item.nome }}
            </v-chip>
          </template>
          <template v-slot:item="data">
            <template>
              <v-list-item-avatar>
                <img :src="`https://i.picsum.photos/id/1011/200/200.jpg`">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="data.item.nome"></v-list-item-title>
                <v-list-item-subtitle>Rampas: {{ totalRampas(data.item) }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="6" lg="6" sm="6" md="6" class="pa-0">
          <v-row justify="center" align="center">
            <v-col>
              <v-list disabled dense>
              <v-subheader>Dados</v-subheader>
                <v-col cols="12" class="py-0"><v-icon size="15" class="mr-2">fas fa-clock</v-icon>
                  <span class="caption">Duração: {{ getDuracao() }}</span>
                </v-col>
                <v-col cols="12" class="py-0"><v-icon size="15" class="mr-2">fas fa-chart-line</v-icon><span class="caption">Rampas: {{ getRampas() }}</span></v-col>
              </v-list>
            </v-col>
            <v-col>
              <div class="my-2">
                <v-btn class="white--text" color="green darken-3" width="150" @click="start()" :disabled="hasStarted">
                  <v-icon left dark>fas fa-play-circle</v-icon>
                  INICIAR
                </v-btn>
              </div>
              <div class="mt-2">
                <v-btn class="white--text" color="orange darken-3" width="150" @click="stop()"  :disabled="!started">
                  <v-icon left dark>fas fa-stopwatch</v-icon>
                  PARAR 
                </v-btn>
              </div>
            </v-col>
          </v-row>  
        </v-col>  
      </v-row>
    </v-container>     
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import conector from '@/sagt/conector'

  export default {
    data: () => ({
      search: '',
      receitas: [],
      autoUpdate: true,
      receita: [],
      isUpdating: false,
      started: false,
    }),
    async mounted () {
      this.receitas = await conector.list('receita');
    },
    watch: {
      receita (val) {
        this.setReceita(val);
      },
    },
    computed: {
      hasStarted () {
        let duracao = this.getDuracao();
        return duracao == undefined;
      }
    },
    methods: {
      ...mapGetters('fabricacao', ['getRampas', 'getDuracao']),
      ...mapActions('fabricacao', ['setReceita']),
      start () {
        this.started = true;
        let duracao = this.getDuracao();
        this.$emit('start', duracao);
      },
      stop () {
        this.started = false;
        this.$emit('stop');
      },
      totalRampas (receita) {
        if (!receita && !receita.rampas) return;
        return receita.rampas.length;
      },
      remove () {
        this.receita = [];
      },
    }
  }
</script>