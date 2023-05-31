<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">

            <router-link class="navbar-brand p-0" :to="{ name: 'home' }">
                <img class="animate__animated animate__slideInDown " id="my-logo" src="../web-developer.png" alt="">

            </router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-3" id="navbarNav">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item active">
                        <router-link :to="{ name: 'projects.index' }" class="nav-link">Progetti</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'about' }" class="nav-link">Chi sono</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'contact' }" class="nav-link">Contatti</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "../style.scss";

nav {
    background-color: black;

    #my-logo {
        width: 100%;
        height: 150px;
    }

    .nav-item:hover {
        background-color: $background_color;
    }

    .nav-item {


        .router-link-active {
            font-weight: bold;
            scale: 1.1;
            color: $primary_color;
            ;
        }
    }
}
</style>