<template>
    <v-list dense dark>
        <v-list-tile v-for="item in menu" @click="$router.push({name : item.route})" :key="item.title">
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{ $t(`header.${item.title}`)}}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
export default {
    name: "Menu",
    data () {
        return {
            menu: [
                { icon: 'home', route: 'home', title: 'home' },
                { icon: 'business_center', route: 'employment', title: 'employment' },
                { icon: 'school', route: 'education', title: 'education' },
                { icon: 'code', route: 'skills', title: 'skills' }
            ]
        }
    }
}
</script>

<style scoped>

</style>
