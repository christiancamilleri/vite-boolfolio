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

            url: 'http://127.0.0.1:8000',
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
            return this.url + 'storage/' + this.project.thumb_preview;
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
    <div v-else class="container">
        <div v-if="projectFound">
            <div class="project-image">

                <img :src="img" alt="">
            </div>
            <h1>{{ project.name }}</h1>
            <hr>
            <p>{{ project.description }}</p>
            <hr>
            <h4>
                {{ project.type?.name ?? 'nessuna tipologia specificata' }}
            </h4>
            <hr>
            <div class="technologies">
                <div v-for="item in project.technologies">
                    <span>{{ item.name }}</span>
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

    width: 100%;

}
</style>