<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-card class="d-inline-block" width="100vw">
        <v-toolbar dense color="cyan darken-3">
          <v-toolbar-title class="white--text">Bombas</v-toolbar-title>
        </v-toolbar>
        <v-row justify="center" align="center">
          <v-col cols="6">
            <v-card class="ml-3" width="170">
              <v-row justify="center" align="center" no-gutters>
                <v-col cols="4" class="text-center">
                  <v-avatar tile color="green darken-2" height="80" width="70">
                    <v-icon dark size="45">fas fa-bath</v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols="8" class="text-center">
                  <div class="mb-2"><v-btn small color="green" dark>ON</v-btn></div>
                  <div ><v-btn small color="red" dark>OFF</v-btn></div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="ml-3" width="170">
            <v-row justify="center" align="center" no-gutters>
              <v-col cols="4" class="text-center">
                <v-avatar tile color="green darken-2" height="80" width="70">
                  <v-icon dark size="45">fas fa-bath</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="8" class="text-center">
                <div class="mb-2"><v-btn small color="green" dark>ON</v-btn></div>
                <div ><v-btn small color="red" dark>OFF</v-btn></div>
              </v-col>
            </v-row>
          </v-card>
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
  })
}
</script>

<style>

</style>