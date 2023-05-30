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
            <a class="navbar-brand" href="#">
                <h1>Christian's portfolio</h1>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-3" id="navbarNav">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item active">
                        <a class="nav-link" href="#progetti">Progetti</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#chi-sono">Chi sono</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contatti">Contatti</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    background-color: #012832;
}
</style>