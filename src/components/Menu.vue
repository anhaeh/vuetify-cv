<template>
    <v-list dense dark>
        <v-list-tile @click="$router.push({name : 'home'})">
            <v-list-tile-action>
                <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{ $t('header.home')}}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push({name : 'employment'})">
            <v-list-tile-action>
                <v-icon>business_center</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{ $t('header.employment')}}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push({name : 'education'})">
            <v-list-tile-action>
                <v-icon>school</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{ $t('header.education')}}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push({name : 'skills'})">
            <v-list-tile-action>
                <v-icon>code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{ $t('header.skills')}}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style scoped>

</style>
