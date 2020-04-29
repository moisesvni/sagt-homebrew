<template>
    <v-menu :value="value" @input="(value) => $emit('input', value)"  offset-x>
      <template v-slot:activator="{ on }">
        <v-icon v-on="on" small class="mr-2" color="red darken-1">fas fa-trash</v-icon>
      </template>
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
            <v-avatar color="indigo" size="36">
              <span class="white--text headline">?</span>
            </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="mb-1">Confirma ação?</v-list-item-title>
              <v-list-item-subtitle>item sera excluído...</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  @click="value = false">Cancelar</v-btn>
          <v-btn color="primary" @click="onConfirm">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
</template>
<script>

export default {
  props: {
    value: { type: Boolean, default: false }
  },
  methods: {
    onConfirm () {
      this.$emit('confirm');
      this.$emit('input', false);
    }
  }
};
</script>