<template>
<v-card>
  <v-toolbar dense dark color="blue darken-3">
    <v-toolbar-title>Fabricação</v-toolbar-title>
  </v-toolbar>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="6" lg="6" sm="6" md="6">
        <v-row justify="center" align="center">
          <v-col cols="12">
            <card-fabricacao/>
          </v-col>
          <v-col cols="12">
            <apexchart type="line" :options="chartOptions" :series="chartOptions.series"></apexchart>
          </v-col>
        </v-row>  
      </v-col>
      <v-col cols="6">
      cards
      </v-col>
    </v-row>
  </v-container>
</v-card>
</template>

<script>
export default {
  data: () => ({
    chartOptions: {
        series: [
            {
              name: "Rampas",
              data: [0, 55, 68, 75, 100]
            },
            {
              name: "Temperatura Atual",
              data: []
            }
        ],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Grafico Rampas',
          align: 'left'
        },
        yaxis: {
          title: {
            text: 'Temperature'
          },
          min: 0,
          max: 100
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['0 min', '55 min', '80 min', '15 min', '60 min'],
        }
      }
  })
}
</script>

<style>

</style>