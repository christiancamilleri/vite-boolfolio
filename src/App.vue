


<script>
import AppHeader from './components/AppHeader.vue';


export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
  }
}
</script>

<template>
  <body>

    <AppHeader></AppHeader>
    <router-view></router-view>

  </body>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
