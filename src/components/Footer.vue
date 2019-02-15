<template>
    <v-footer dark
            height="auto">
        <v-card class="flex">
            <v-card-actions class="justify-center" :class="color">
                &copy; 2019 — <strong class="pl-1">Haehnel Andrés</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        props: ['color'],
        name: "Footer"
    }
</script>

<style scoped>

</style>
