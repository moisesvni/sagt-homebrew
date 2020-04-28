<template>
 <v-card>
    <v-toolbar dense dark color="blue darken-3">
      <v-toolbar-title>Controle de Receitas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" color="success" @click="editItem({ rampas:[] })">
        <v-icon left>fas fa-save</v-icon> Novo
      </v-btn>
    </v-toolbar>
    <v-layout row wrap class="pa-4">
      <v-flex xs6>
        <v-card-title>
          <v-text-field v-model="search" append-icon="fas fa-search" label="Pesquisa" single-line hide-details/>
        </v-card-title>
      </v-flex>
      <v-flex lg12 md12>   
        <v-data-table
          :headers="headers" :items="items" :search="search" class="elevation-1" :loading="loadingData">
          <template  v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)" color="blue darken-3">fas fa-edit</v-icon>
            <confirm-popover slot="activator"  @confirm="deleteItem(item)"/>
          </template>
        </v-data-table>
      </v-flex>   
    </v-layout>
    <v-dialog v-model="dialog" persistent max-width="600px" height="500px">
      <receita-edit @realoadGrid="getReceitas"></receita-edit>
    </v-dialog>
    <div class="text-center ma-2">
      <v-snackbar v-model="snack" color="success">
        {{ snackbarText }}
      </v-snackbar>
    </div> 
  </v-card>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import conector from '@/sagt/conector'

export default {
    data: () => ({
    search: '',
    loadingData: false,
    menu: false,
    headers: [
        { text: 'ID', align: 'left', sortable: true, value: 'id' },
        { text: 'Nome', value: 'nome' },
        { text: 'Rampas', value: 'rampas.length' },
        { text: 'Ações', value: 'action', sortable: false, align: 'center' }
    ],
    items: [],
  }),
  async created () {
    await this.getReceitas();
  },
  computed: {
    ...mapState('receita', ['dialog', 'snackbar', 'snackbarText']),
    snack: {
      get () { return this.snackbar; },
      set (value) { this.changeSnackbar(value); }
    }
  },
  methods: {
    ...mapActions('receita', ['setReceita', 'changeDialog', 'changeSnackbar', 'setSnackbarText']),
    async getReceitas () {
      this.loadingData = true;
      this.items = await conector.list('receita');
      this.loadingData = false;
    },
    editItem (item) {
      this.setReceita(item);
      this.changeDialog();
    },
    async deleteItem (item) {
      await conector.delete('receita', item.id);
      this.getReceitas();
      this.setSnackbarText('Receita deletada com sucesso');
    }
  },
};
</script>

