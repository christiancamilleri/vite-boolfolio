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
    <!-- <div class="card post">

        <img :src="img" class="cover-image card-img-top" alt="...">

        <div class="card-body">

            <h5 class="card-title">{{ project.name }}</h5>

            <p class="card-text"> {{ project.description }} </p>

            <div class="text-center">
                <Router-link :to="{ name: 'project.show', params: { slug: project.slug } }"
                    class="btn btn-primary">Show</Router-link>
            </div>

        </div>

    </div> -->

    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="img" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ project.name }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <p class="card-text">
                        {{ project.type?.name }}
                    </p>
                    <p class="card-text">
                        <small v-for="item in project.technologies" class="text-body-secondary">
                            {{ item.name }},
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.card {
    background-color: $primary_color;
    color: black;
    border: 1px solid $secondary_color;

    .cover-image {
        height: 300px;

        object-fit: cover;
        object-position: center;
    }

    .card-body {
        .card-title {
            color: #001419;
        }
    }
}
</style>