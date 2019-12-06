<template>
  <v-app id="inspire">
    <Header :color="color"></Header>
    <v-content>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
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

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
