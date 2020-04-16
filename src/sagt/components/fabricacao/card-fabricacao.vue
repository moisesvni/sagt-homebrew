<template>
  <v-card class="mx-auto" max-height="200px">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="50px">
      <v-card-title class="body-1 white--text">Receita a ser executada.</v-card-title>
    </v-img>
    <v-container fluid class="mt-0 pt-0">
      <v-row justify="center" align="center">
        <v-col cols="6" lg="6" sm="6" md="6">
          <v-autocomplete v-model="receita" :items="receitas" chips label="Receita" item-text="name" item-value="name">
          <template v-slot:selection="data">
            <v-chip v-bind="data.attrs" close @click="data.select" @click:close="remove(data.item)">
              <v-avatar left>
                <v-img :src="`https://cdn.vuetifyjs.com/images/lists/1.jpg`"></v-img>
              </v-avatar>
              {{ data.item.nome }}
            </v-chip>
          </template>
          <template v-slot:item="data">
            <template>
              <v-list-item-avatar>
                <img :src="`https://cdn.vuetifyjs.com/images/lists/1.jpg`">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="data.item.nome"></v-list-item-title>
                <v-list-item-subtitle>Rampas: {{ totalRampas(data.item) }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="6" lg="6" sm="6" md="6">
          <v-list disabled dense>
            <v-subheader>Dados</v-subheader>
              <v-col cols="12" class="py-0"><v-icon size="15" class="mr-2">fas fa-clock</v-icon>
                <span class="caption">Duração: {{ getDuracao() }}</span>
              </v-col>
              <v-col cols="12" class="py-0"><v-icon size="15" class="mr-2">fas fa-chart-line</v-icon><span class="caption">Rampas: {{ getRampas() }}</span></v-col>
            </v-list>
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
      isUpdating: false
    }),
    async mounted () {
      this.receitas = await conector.list('receita');
    },
    watch: {
      receita (val) {
        this.setReceita(val);
      },
    },
    methods: {
      ...mapGetters('fabricacao', ['getRampas', 'getDuracao']),
      ...mapActions('fabricacao', ['setReceita']),
      duracao () {
        if (this.receita){
          let sum = this.receita.rampas
          .map(item => item.duracao)
          .reduce((prev, curr) => prev + curr, 0);
          return sum;
        }
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