<template>
  <img alt="letniaKolonia logo fixed-top w-25 p-3" style="width:400px; height:400px" src="./assets/logo.jpg">
  <LetniaHome msg="Siemanko!"/>
</template>

<script>
import LetniaHome from './components/LetniaHome.vue'

export default {
  name: 'App',
  components: {
    LetniaHome
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
  margin-top: 60px;
}
</style>
