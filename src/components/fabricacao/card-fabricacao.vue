<template>
  <v-card class="mx-auto">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="50px">
     <v-card-title class="body-1 white--text">Receita a ser executada.</v-card-title>
    </v-img>
    <v-autocomplete v-model="receita"
        :disabled="isUpdating"
        :items="receitas"
        filled
        chips
        label="Receita"
        item-text="name"
        item-value="name"
            >
            <template v-slot:selection="data">
            <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                close
                @click="data.select"
                @click:close="remove(data.item)"
            >
                  <v-avatar left>
                    <v-img :src="`https://cdn.vuetifyjs.com/images/lists/1.jpg`"></v-img>
                  </v-avatar>
                  {{ data.item.nome }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-avatar>
                    <img :src="`https://cdn.vuetifyjs.com/images/lists/1.jpg`">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.nome"></v-list-item-title>
                    <!-- <v-list-item-subtitle>{{receitas}}</v-list-item-subtitle> -->
                    <!-- <v-list-item-subtitle v-html="data.item.receitas.rampas.lenght"></v-list-item-subtitle> -->
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
  </v-card>
</template>
<script>
import conector from '@/conector'

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
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },
    methods: {  
      remove (item) {
        this.receita = [];
      },
    },
  }
</script>