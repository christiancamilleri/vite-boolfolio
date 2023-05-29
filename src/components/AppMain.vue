<script >
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      projects: [],
    }
  },
  components: {

  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then(res => {
        // console.log(res.data.results);
        this.projects = res.data.results;
      })
    }
  }
}
</script>

<template>
  prova
</template>

<style></style>
