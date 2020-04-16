<template>
      <v-card>
        <v-card-title>
          <span class="headline">Cadastro Receita</span>
        </v-card-title>
        <v-card-text>
          <small>*campos obrigatórios</small>
          <v-container>
            <v-form ref="form" v-model="valid">
            <v-row>
              <v-col cols="12" lg="12" sm="6" md="6">
                <v-text-field v-model="receita.nome" label="Nome*" required :rules="nameRules" :counter="64"></v-text-field>
              </v-col>
              <v-col cols="12" lg="12" sm="6" md="6">
                <v-text-field type="number" v-model="receita.versao" label="Versão" hint="versão da receita"  :counter="4"></v-text-field>
              </v-col>
              <v-col cols="12" lg="12" sm="12" md="12">
                <v-card>
                  <v-toolbar dense :elevation="1">
                    <v-toolbar-title class="body-1">Rampas *</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip left>
                      <template v-slot:activator="{ on }">
                        <v-btn v-on="on" icon color="success" @click="adicionarRampa()">
                          <v-icon>fas fa-plus-circle</v-icon>
                        </v-btn>
                      </template>
                      <span>Adicionar rampa</span>
                    </v-tooltip>
                  </v-toolbar>
                  <v-container fluid>
                  <v-row v-for="(rampa, k) in receita.rampas" :key="k">
                    <v-form ref="form">
                    <v-row class="pl-2 pr-2">
                      <v-col cols="12" lg="3" sm="6" md="3">
                        <v-text-field type="number" v-model="rampa.order" label="Ordem" :counter="1"></v-text-field>
                      </v-col>
                      <v-col cols="12" lg="3" sm="6" md="3">
                        <v-text-field label="Tempo" v-model="rampa.tempo" type="time" suffix="PST"></v-text-field>
                      </v-col>
                      <v-col cols="12" lg="4" sm="6" md="3">
                        <v-text-field type="number" v-model="rampa.temperatura" label="Temperatura" :counter="3"></v-text-field>
                      </v-col>
                      <v-col cols="12" lg="1" sm="6" md="2" class="mt-3">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-btn v-on="on" icon color="red" @click="removerRampa(k)">
                              <v-icon>fas fa-minus-circle</v-icon>
                            </v-btn>
                          </template>
                          <span>remover rampa</span>
                        </v-tooltip>
                      </v-col>
                    </v-row>
                    </v-form>
                  </v-row>
                  </v-container>
                </v-card>  
              </v-col>
            </v-row>
            </v-form>  
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1 white--text" @click="changeDialog">Fechar</v-btn>
          <v-btn color="error" class="mr-4" @click="reset">Limpar</v-btn>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="save">Salvar</v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import conector from '@/sagt/conector'

export default {
  data: () => ({
    valid: true,
    valid2: true,
    search: '',
    nameRules: [
      v => !!v || 'Name é obrigatório!',
      v => (v && v.length <= 64) || 'Nome ultrapassou os 64 characteres!',
    ],
  }),
  async created () {
    
  },
  computed: mapState('receita', ['receita']),
  methods: {
    ...mapActions('receita', ['changeDialog', 'changeSnackbar', 'setSnackbarText']),
    reset () {
      this.$refs.form.reset();
    },
    async save () {
      await conector.save('receita', this.receita);
      this.changeSnackbar(true);
      this.changeDialog();
      let textSnack = this.receita.id ? 'Receita atualizada com sucesso' : 'Receita criada com sucesso';
      this.setSnackbarText(textSnack);
      this.$emit('realoadGrid');
    },
    adicionarRampa () {
      this.receita.rampas.push({});
    },
    removerRampa (index) {
      this.receita.rampas.splice(index, 1);
    },
    deleteItem () {
    }
  },
};
</script>

