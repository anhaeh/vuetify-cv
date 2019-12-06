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
         <v-tooltip bottom close-delay="0">
          <template v-slot:activator="{ on }">
            <v-toolbar-side-icon v-on="on" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          </template>
          <span>{{ $t(titleHamburger) }}</span>
        </v-tooltip>
        <v-toolbar-title class="text-capitalize">{{ $t('header.' + $route.name) }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat fab href="https://www.linkedin.com/in/andreshaehnel/">
              <img src="@/assets/images/linkedin.png">
            </v-btn>
          </template>
          <span>Linkedin</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat fab href="https://github.com/anhaeh">
              <img src="@/assets/images/github-box.png">
            </v-btn>
          </template>
          <span>GitHub</span>
        </v-tooltip>
        <LangSwitcher>
        </LangSwitcher>
    </v-toolbar>
    </span>
</template>

<script>
import Menu from './Menu'
import LangSwitcher from './LangSwitcher'

export default {
    name: "Header",
    components: {
        Menu,
        LangSwitcher
    },
    props: ['color'],
    data () {
        return {
            drawer: null,
        }
    },
    computed: {
        titleHamburger: function() {
            return this.drawer ? 'header.hide_menu' : 'header.show_menu'
        }
    }
}
</script>
