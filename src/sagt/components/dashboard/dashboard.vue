<template>
<v-container class="grey lighten-5">
  <v-row no-gutters>
    <v-col cols="12" sm="6">
      <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
    </v-col>
    <v-col cols="12" sm="6">
      <apexchart type="donut" :options="chartOptions2" :series="series2" />
    </v-col>
  </v-row>
  <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        </v-card>
      </v-col>
    </v-row>
</v-container>
</template>
<script>

// import conector from '@/conector'

export default {
  data: () => ({
    chartOptions: {
      chart: {
        id: "vuechart-example"
      },
      xaxis: {
        categories: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
      }
    },
    series: [
      {
        name: "Produção Geral",
        data: [30, 40, 35, 50, 99, 160, 270, 320]
      }
    ],
    chartOptions2: {
      chart: {
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px"
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ['Kalik Jack', 'Calimero', 'Matifero', 'Ripa Brava', 'Irva Ane']
    },
    series2: [44, 55, 41, 17, 15]
  }),
  async mounted() {
    // this.fonecedores = await conector.list('fornecedor');
  },
};
</script>
