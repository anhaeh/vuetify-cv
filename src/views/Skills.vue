<template>
  <v-container fluid grid-list-md>
    <v-flex xs12 md8 offset-md2>
      <v-card v-for="(item, key) in items" class="mb-3 elevation-4" :key="`skills-${key}`">
        <v-card-title class="subheading font-weight-bold">
          {{ $t(item.text) }}
        </v-card-title>
        <v-divider></v-divider>
        <v-slide-y-transition>
          <v-list dense>
            <v-list-tile v-for="skill in item.items" :key="`skills-${key}-${skill.name}`">
              <v-list-tile-content>{{ skill.name }}</v-list-tile-content>
              <v-list-tile-content class="align-end">
                <v-rating :title="skill.score"
                          v-model="skill.score"
                          classes="text-lg-right"
                          color="yellow darken-3"
                          background-color="grey darken-1"
                          half-increments
                          :readonly="true">
                </v-rating>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Skills",
  data () {
      return {
          items: [
              {
                  text: 'skills.languages',
                  color: 'teal darken-2',
                  items: [
                    { name: 'Python', score: 4.5 },
                    { name: 'Html', score: 4.5 },
                    { name: 'JavaScript', score: 4 },
                    { name: 'CSS', score: 4 },
                    { name: 'Php', score: 4 },
                    { name: 'ANSI C', score: 3 }
                  ]
              },
              {
                  text: 'skills.frameworks',
                  color: 'light-blue darken-4',
                  items: [
                      { name: 'Django' , score: 4.5 },
                      { name: 'Flask' , score: 4.5 },
                      { name: 'VueJs 2' , score: 4 },
                      { name: 'AngularJs' , score: 3 },
                      { name: 'Laravel' , score: 3 }
                  ]
              },
              {
                  text: 'skills.libs',
                  color: 'red darken-1',
                  items: [
                      { name: 'Bootstrap 3/4' , score: 4.5 },
                      { name: 'Jquery' , score: 4 },
                      { name: 'Python Behave' , score: 3.5 },
                      { name: 'UnitTest' , score: 4 },
                      { name: 'BulmaCss' , score: 3.5 }
                  ]
              },
              {
                  text: 'skills.databases',
                  color: 'deep-purple darken-1',
                  items: [
                      { name: 'Mysql' , score: 4.5 },
                      { name: 'Postgres' , score: 3.5 },
                      { name: 'SqlServer' , score: 3.5 },
                      { name: 'MongoDb' , score: 3.5 },
                      { name: 'ElasticSearch' , score: 3.5 }
                  ]
              },
              {
                  text: 'skills.os',
                  classes: 'green darken-3',
                  items: [
                      { name: 'Windows' , score: 4.5 },
                      { name: 'Linux' , score: 4.5 }
                  ]
              },
              {
                  text: 'skills.others',
                  color: 'blue-grey darken-1',
                  items: [
                      { name: 'Git' , score: 5 },
                      { name: 'Memcached' , score: 4.5 },
                      { name: 'Gunicorn' , score: 4 },
                      { name: 'RabbitMQ' , score: 4 },
                      { name: 'Webpack' , score: 3.5 },
                      { name: 'Nginx' , score: 3.5 },
                      { name: 'Jenkins' , score: 3.5 },
                      { name: 'Docker' , score: 3 },
                      { name: 'Vagrant' , score: 3 },
                      { name: 'Redis' , score: 3 }
                  ]
              }
          ]
      }
  }
}
</script>

<style scoped>
</style>
