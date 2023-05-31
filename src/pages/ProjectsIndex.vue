<script >
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectIndex',
    data() {
        return {
            projects: [],


            types: [],
            selectedTypeId: '',
            projectFound: false,
            isLoading: true,
        }
    },
    components: {
        ProjectCard,
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {

            axios.get('http://127.0.0.1:8000/api/projects' + '?type_id=' + this.selectedTypeId).then(res => {
                console.log(res.data)
                this.isLoading = false;
                if (res.data.success) {
                    this.projects = res.data.results;
                    this.types = res.data.allTypes;
                    this.projectFound = true;

                } else {
                    this.projectFound = false;
                }

            })
        },

    }
}
</script>

<template>
    <div>

        <h1 class="text-center my-3">I miei progetti:</h1>
        <div class="container">
            <form action="" class="d-flex">
                <select name="type_id" id="type_id" class="form-select my-select" v-model="selectedTypeId"
                    @change="getProjects()">
                    <option value="">Tutte</option>
                    <option v-for="item in types" :value="item.id">{{ item.name }}</option>
                </select>

            </form>
            <div v-if="!isLoading">
                <hr>

                <div v-if="projectFound" class="row">
                    <div v-for="project in projects" class="col-6 mb-5">
                        <ProjectCard :project="project"></ProjectCard>

                    </div>

                </div>
                <div v-else>
                    <div class="alert alert-warning" role="alert">
                        Nessun progetto trovato
                    </div>

                </div>

            </div>
            <div v-else class="loading-screen">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.my-select {
    border: 1px solid $primary_color;
}
</style>