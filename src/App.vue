<template>
  <img src="./assets/img/LTLogo.png">
  <LetniaHome />
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
  background-color: #008080;
}

@media only screen (max-width: 390px) {
  background-color: ;
}
</style>
