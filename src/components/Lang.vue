<template>
    <v-menu offset-y bottom transition="slide-y-transition">
        <v-btn flat fab slot="activator">
            <v-icon :title="$t('header.language')">translate</v-icon>
        </v-btn>
        <v-list>
            <v-list-tile v-for="lang in languages" @click="setLanguage(lang.value)" v-show="lang.value !== $i18n.locale"
                         :title="lang.text" :key="`lang-${lang.value}`">
                <v-list-tile-title>
                    <img :src="lang.image">
                </v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>
</template>

<script>
import es from '@/assets/images/es.svg'
import gb from '@/assets/images/gb.svg'

export default {
    name: "Lang",
    computed: {
        languages: function () {
            return [
                { 'text': this.$t('header.english'), 'value': 'en', 'image': gb },
                { 'text': this.$t('header.spanish'), 'value': 'es', 'image': es }
            ]
        }
    },
    methods: {
        setLanguage: function (lang) {
            this.$i18n.locale = lang
        }
    }
}
</script>

<style scoped>

</style>

<style scoped>

</style>
