<template>
  <v-row>
    <v-col cols="4">
      <temperaturas />
    </v-col>
    <v-col cols="8">
      <tanque/>
      <bombas/>
    </v-col>
  </v-row>  
</template>

<script>
export default {
 data: () => ({
    tempAtual: 55.00
  }),
  computed: {
    
  },
}
</script>

<style>

</style>