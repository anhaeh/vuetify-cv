<template>
  <v-app id="inspire">
    <Header :color="color"></Header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer :color="color"></Footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
      Header,
      Footer
  },
  data () {
      return {
          color: "blue-grey darken-2"
      }
  }
}
</script>
