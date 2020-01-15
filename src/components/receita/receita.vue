<template>
 <v-card>
    <v-toolbar dense dark color="blue darken-3">
        <v-toolbar-title>Controle de Receitas</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" color="success">
            <v-icon left>fas fa-save</v-icon> Novo
        </v-btn>
    </v-toolbar>
    <v-layout row wrap class="pa-4">
    <v-flex xs6>
      <v-card-title>
        <v-text-field
          v-model="search" append-icon="fas fa-search" label="Pesquisa" single-line hide-details
        ></v-text-field>
      </v-card-title>
    </v-flex>
    <v-flex lg12 md12>   
      <v-data-table
        :headers="headers" :items="items" :search="search" class="elevation-1">
        <template  v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">fas fa-edit</v-icon>
          <v-icon small @click="deleteItem(item)">fas fa-trash</v-icon>
        </template>
      </v-data-table>
    </v-flex>   
  </v-layout>
  </v-card>
</template>
<script>
import conector from '@/conector'

export default {
    data: () => ({
    search: '',
    headers: [
        { text: 'ID', align: 'left', sortable: true, value: 'id'},
        { text: 'Nome', value: 'nome' },
        { text: 'Rampas', value: 'rampas.length' },
        { text: 'Ações', value: 'action', sortable: false, align: 'center' }
    ],
    items: [],
  }),
  async created () {
    this.items = await conector.list('receita');
  },
  computed: {
    filter() {
      return "filter";
    }
  },
  methods: {
    editItem (item) {
      console.log(item);
    },
    deleteItem (item) {
      console.log(item);
    }
  },
};
</script>

