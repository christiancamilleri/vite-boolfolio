<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container home py-5">
        <section class="jumbo">
            <router-link :to="{ name: 'projects.index' }">Qui puoi vedere tutti i miei progetti</router-link>
        </section>
    </div>
</template>

<style lang="scss" scoped></style>