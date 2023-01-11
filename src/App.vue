<template>
  <LetniaHome />
  <NavFooter />
</template>

<script>
import LetniaHome from './components/LetniaHome.vue';
import NavFooter from './components/NavFooter.vue';

export default {
  name: 'App',
  components: {
    LetniaHome,
    NavFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #008080;
}
</style>
