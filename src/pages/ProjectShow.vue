<script>
import axios from 'axios';

export default {
    name: 'ProjectShow',
    data() {
        return {
            projectSlug: '',
            projectFound: false,
            isLoading: true,
            project: {},

            url: 'http://127.0.0.1:8000/',
        }
    },
    mounted() {
        this.projectSlug = this.$route.params.slug;
        this.getProject();
    },
    methods: {
        getProject() {
            axios.get('http://127.0.0.1:8000/api/projects/' + this.projectSlug).then(res => {
                this.isLoading = false;
                if (res.data.success) {
                    this.project = res.data.project;
                    this.projectFound = true

                } else {
                    this.projectFound = false

                }
            });
        }
    },
    computed: {
        img() {
            if (this.project.thumb_preview == null) {
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnkJFe_M0Wi8G6hmKRSTVXYvUzXUa2-1_IUssm6zPWzgsLE7rZoC5krgUz-33ndxSCqg&usqp=CAU'
            } else {
                return this.url + 'storage/' + this.project.thumb_preview;
            }
        }
    }
}
</script>

<template>
    <div v-if="isLoading">

        <div id="spinner" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else>
        <div v-if="projectFound">
            <div class="my-img my-5">

                <img :src="img" alt="prova">
            </div>
            <div class="container">

                <span>
                    Nome progetto:
                    <h1>{{ project.name }}</h1>
                </span>
                <hr>
                <span>Descrizione:</span>
                <h3>{{ project.description }}</h3>
                <hr>
                <span>
                    Tipologia:
                </span>
                <h4>
                    {{ project.type?.name ?? 'nessuna tipologia specificata' }}
                </h4>
                <hr>
                <div class="technologies">
                    <span>
                        Tecnologie utilizzate:
                    </span>
                    <div v-for="item in project.technologies">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                Nessun progetto trovato
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
#spinner {
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>