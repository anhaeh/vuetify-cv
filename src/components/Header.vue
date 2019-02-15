<template>
    <span>
    <v-navigation-drawer dark v-model="drawer"
                        fixed
                        app>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="@/assets/images/profile.jpeg" alt="andres">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Haehnel Andrés</v-list-tile-title>
              <v-list-tile-sub-title>{{ $t('common.software_engineer') }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <Menu></Menu>
    </v-navigation-drawer>
    <v-toolbar :color="color" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" :title="$t('header.show_menu')"></v-toolbar-side-icon>
        <v-toolbar-title class="text-capitalize">{{ $t('header.' + $route.name) }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat fab href="https://www.linkedin.com/in/andreshaehnel/" title="Linkedin">
          <img src="@/assets/images/linkedin.png">
        </v-btn>
        <v-btn flat fab href="https://github.com/anhaeh" title="GitHub">
          <img src="@/assets/images/github-box.png">
        </v-btn>
        <Lang></Lang>
    </v-toolbar>
    </span>
</template>

<script>
import Menu from './Menu'
import Lang from './Lang'

export default {
    name: "Header",
    components: {
        Menu,
        Lang
    },
    props: ['color'],
    data () {
        return {
            drawer: null,
        }
    }
}
</script>

<style scoped>

</style>
