<template>
  <v-row>
    <v-col cols="6">
      <v-card class="d-inline-block" height="223">
        <v-toolbar dense color="cyan darken-3">
          <v-toolbar-title class="white--text">Tanque A</v-toolbar-title>
        </v-toolbar>
        <v-row justify="center" align="center">
          <v-col cols="12" class="ml-3">
            <span class="caption mr-3">Temperatura:</span>
            <div class="display-1">{{ `${this.tempAtual+9} °C` }}</div>
          </v-col>
          <v-col cols="12" class="py-0"><v-divider></v-divider></v-col>
          <v-col cols="12" class="text-center">
            <v-row justify="center" align="center" no-gutters>
              <v-col cols="12" class="mb-2 body-2">Aquecimento:</v-col>
              <v-col cols="6">
                <v-btn small color="green" dark>ON</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn small color="red" dark>OFF</v-btn>
              </v-col>
            </v-row>  
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="d-inline-block" height="223">
        <v-toolbar dense color="teal darken-3">
          <v-toolbar-title class="white--text">Tanque B</v-toolbar-title>
        </v-toolbar>
        <v-row justify="center" align="center">
          <v-col cols="12" class="ml-3">
            <span class="caption mr-3">Temperatura:</span>
            <div class="display-1">{{ atualTemp }}</div>
          </v-col>
          <v-col cols="12" class="py-0"><v-divider></v-divider></v-col>
          <v-col cols="12" class="text-center">
            <v-row justify="center" align="center" no-gutters>
              <v-col cols="12" class="mb-2 body-2">Aquecimento:</v-col>
              <v-col cols="6">
                <v-btn small color="green" dark>ON</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn small color="red" dark>OFF</v-btn>
              </v-col>
            </v-row>  
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>  
</template>

<script>
export default {
 data: () => ({
    tempAtual: 55.00
  }),
  computed: {
    atualTemp () {
      return `${this.tempAtual} °C`
    },
  },
}
</script>

<style>

</style>