<script >
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
        }
    },
    props: {
        project: Object,
    },
}
</script>

<template>
    <div class="card post">



        <div class="card-body">

            <h5 class="card-title">{{ project.name }}</h5>

            <p class="card-text"> {{ project.description }} </p>


        </div>

    </div>
</template>

<style></style>