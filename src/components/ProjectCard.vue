<script >
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/'
        }
    },
    props: {
        project: Object,
    },
    computed: {
        img() {
            if (this.project.thumb_preview == null) {
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnkJFe_M0Wi8G6hmKRSTVXYvUzXUa2-1_IUssm6zPWzgsLE7rZoC5krgUz-33ndxSCqg&usqp=CAU'
            } else {
                return this.baseUrl + 'storage/' + this.project.thumb_preview;
            }
        }
    }
}
</script>

<template>
    <div class="card post">

        <img :src="img" class="cover-image card-img-top" alt="...">

        <div class="card-body">

            <h5 class="card-title">{{ project.name }}</h5>

            <p class="card-text"> {{ project.description }} </p>


        </div>

    </div>
</template>

<style lang="scss">
.card {
    .cover-image {
        height: 300px;

        object-fit: cover;
        object-position: center;
    }
}
</style>