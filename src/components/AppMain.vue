<script >
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'App',
  data() {
    return {
      projects: [],
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
      axios.get('http://127.0.0.1:8000/api/projects').then(res => {
        console.log(res.data.results);
        this.projects = res.data.results;

      })
    }
  }
}
</script>

<template>
  <h1>Tutti i progetti:</h1>
  <div class="row">
    <div v-for="project in projects" class="col-4 mb-5">
      <ProjectCard :project="project"></ProjectCard>

    </div>

  </div>
</template>

<style></style>
