<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <div class="education">
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
              <v-card-title class="headline" :class="`${year.color}--text`">
                {{ $t(year.title) }}
              </v-card-title>
              <v-card-text v-text="$t(year.description)" class="subheading"></v-card-text>
              <v-card-text v-text="year.site"></v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: "Education",
    data: () => ({
        years: [
            {
                color: 'cyan',
                year: '2006',
                title: 'education.high_school',
                description: 'education.secondary',
                site: "Niño Jesus La Salle, Gral San Martín"
            },
            {
                color: 'green',
                year: '2012',
                title: 'education.university',
                description: 'education.analyst',
                site: 'Universidad de Palermo, Ciudad Autónoma de Buenos Aires'
            },
            {
                color: 'pink',
                year: '2015',
                title: 'education.university',
                description: 'education.engineer',
                site: 'Universidad de Palermo, Ciudad Autónoma de Buenos Aires'
            },
            {
                color: 'amber',
                year: '2018',
                title: 'education.course',
                description: 'education.course_leader',
                site: 'Whalecom, Ciudad Autónoma de Buenos Aires'
            }
        ]
    })
}
</script>
