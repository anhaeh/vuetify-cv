<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <div class="employment">
        <v-timeline>
          <v-timeline-item
                  v-for="(year, i) in years"
                  :key="i"
                  :color="year.color"
                  small>
          <span slot="opposite"
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"></span>
            <v-card class="elevation-4">
              <v-card-title class="headline" :class="`${year.color}--text`">{{ year.title }}</v-card-title>
              <v-card-text v-text="$t(year.description)" class="subheading"></v-card-text>
              <v-card-text v-text="year.city"></v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: "Employment",
    data: () => ({
        years: [
            {
                color: 'blue',
                year: '2008',
                title: 'Sanchez Montero y Asociados',
                description: 'employment.support',
                city: "General San Martin, Buenos Aires"
            },
            {
                color: 'cyan',
                year: '2011',
                title: 'Microteam SA',
                description: 'employment.full_stack_php',
                city: "Ciudad Autónoma de Buenos Aires"
            },
            {
                color: 'green',
                year: '2013',
                title: 'DigBang',
                description: 'employment.full_stack_php',
                city: "Ciudad Autónoma de Buenos Aires"
            },
            {
                color: 'pink',
                year: '2015',
                title: 'Kiu System Solutions',
                description: 'employment.full_stack',
                city: "Ciudad Autónoma de Buenos Aires"
            },
            {
                color: 'amber',
                year: '2017',
                title: 'Kiu System Solutions',
                description: 'employment.tech_lead',
                city: "Ciudad Autónoma de Buenos Aires"
            }
        ]
    })
}
</script>
