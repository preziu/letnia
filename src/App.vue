<template>
  <div class="container">
    <LetniaHome />
    <MenuHome />
    <NavFooter />
  </div>
</template>

<script>
import LetniaHome from './components/LetniaHome.vue';
import MenuHome from './components/MenuHome.vue';
import NavFooter from './components/NavFooter.vue';

export default {
  name: 'App',
  components: {
    LetniaHome,
    NavFooter,
    MenuHome
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(assets/img/wallpaper.jpeg);
  background-size: cover;
}

.container {
  min-width: 100vw;
  padding: 0 0 0 0;
}
</style>
