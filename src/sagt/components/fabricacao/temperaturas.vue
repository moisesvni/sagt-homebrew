<template>
  <v-row >
    <v-col cols="12">
      <v-card class="d-inline-block" width="220" height="100">
        <v-row justify="center" align="center" no-gutters  style="height: 100px;">
          <v-col cols="4" class="text-center">
            <v-avatar tile color="green darken-2" height="100" width="72">
              <v-icon dark size="45">fas fa-thermometer-half</v-icon>
            </v-avatar>
          </v-col>
          <v-col cols="8" class="text-center">
            <div class="mb-3">Temperatura Atual</div>
            <div class="display-1">{{ atualTemp }}</div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="d-inline-block" width="220" height="100">
        <v-row justify="center" align="center" no-gutters  style="height: 100px;">
          <v-col cols="4" class="text-center">
            <v-avatar tile color="red darken-2" height="100" width="72">
              <v-icon dark size="45">fas fa-thermometer-full</v-icon>
            </v-avatar>
          </v-col>
          <v-col cols="8" class="text-center"> 
            <div class="mb-3">Maior Temperatura</div>
            <div class="display-1">{{ higthTemp }}</div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="d-inline-block" width="220" height="100">
        <v-row justify="center" align="center" no-gutters  style="height: 100px;">
          <v-col cols="4" class="text-center">
            <v-avatar tile color="blue darken-1" height="100" width="72">
              <v-icon dark size="45">fas fa-thermometer-quarter</v-icon>
            </v-avatar>
          </v-col>
          <v-col cols="8" class="text-center">
            <div class="mb-3">Menor Temperatura</div>
            <div class="display-1">{{ lownTemp }}</div>
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
    higthTemp () {
      return `${this.tempAtual+13} °C`
    },
    lownTemp () {
      return `${this.tempAtual-10} °C`
    }
  },
}
</script>

<style>

</style>