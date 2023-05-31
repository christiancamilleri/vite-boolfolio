<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div>
        <section class="jumbo py-5 container d-flex justify-content-center align-items-center">
            <div class="left-jumbo animate__backInLeft">
                <img class="my-img" src="" alt="">
            </div>
            <div class="right-jumbo animate__animated animate__slideInRight">
                <p>
                <h1>
                    Christian Camilleri
                </h1>
                <span>
                    Junior Full Stack Developer
                </span>
                </p>
                <router-link class="my-link" :to="{ name: 'projects.index' }">Mostra progetti</router-link>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.jumbo {


    .left-jumbo {
        width: 50%;

        .my-img {
            width: 70%;
        }

    }

    .right-jumbo {
        width: 50%;

        .my-link {
            color: $primary_color;
        }

    }
}
</style>