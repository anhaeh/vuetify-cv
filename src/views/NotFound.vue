<template>
    <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <div class="container">
                <h1>404</h1>
                <p><strong>File not found</strong></p>
                <p>
                    {{ $t('404') }}
                </p>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
</style>
