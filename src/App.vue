<template>
  <div class="container">
    <img class="logo" src="./assets/img/3d2.gif" />
    <div class="row">
          <div class="col">
              <router-link to="/booking">
                  <img src="./assets/img/DiskDrive.png" alt="">
                  <div class="text-primary">
                      Zarezerwuj wczasy
                  </div>
              </router-link>
          </div>
          <div class="col">
              <img src="./assets/img/Volume.png" alt="">
              <div class="text-primary">
                  Plan zajec
              </div>
              
          </div>
          <div class="col">
              <img src="./assets/img/Internet.png" alt="">
              <div class="text-primary">
                  Osrodek wypoczynkowy
              </div>
          </div>
          <div class="col">
              <img src="./assets/img/Paint.png" alt="">
              <div class="text-primary">
                  Kup akcesoria
              </div>
          </div>
      </div>
    <!-- <NavFooter /> -->
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
// import LetniaHome from './components/LetniaHome.vue';
// import MenuHome from './components/MenuHome.vue';
// import NavFooter from './components/NavFooter.vue';

export default {
  name: 'App',
  // components: {
  //   LetniaHome,
  //   // NavFooter,
  //   MenuHome
  // }
}
</script>

<style>
* {
  cursor: url("assets/cursorImages/piano1.png"), auto;
  -webkit-animation: cursor 800ms infinite;
  animation: cursor 800ms infinite;
}

@-webkit-keyframes cursor {
  12% {cursor: url("assets/cursorImages/piano1.png"), auto;}
  23% {cursor: url("assets/cursorImages/piano2.png"), auto;}
  35% {cursor: url("assets/cursorImages/piano3.png"), auto;}
  46% {cursor: url("assets/cursorImages/piano4.png"), auto;}
  58% {cursor: url("assets/cursorImages/piano5.png"), auto;}
  70% {cursor: url("assets/cursorImages/piano6.png"), auto;}
  80% {cursor: url("assets/cursorImages/piano7.png"), auto;}
  90% {cursor: url("assets/cursorImages/piano8.png"), auto;}
  100% {cursor: url("assets/cursorImages/piano9.png"), auto;}
} 

@keyframes cursor {
  12% {cursor: url("assets/cursorImages/piano1.png"), auto;}
  23% {cursor: url("assets/cursorImages/piano2.png"), auto;}
  35% {cursor: url("assets/cursorImages/piano3.png"), auto;}
  46% {cursor: url("assets/cursorImages/piano4.png"), auto;}
  58% {cursor: url("assets/cursorImages/piano5.png"), auto;}
  70% {cursor: url("assets/cursorImages/piano6.png"), auto;}
  80% {cursor: url("assets/cursorImages/piano7.png"), auto;}
  90% {cursor: url("assets/cursorImages/piano8.png"), auto;}
  100% {cursor: url("assets/cursorImages/piano9.png"), auto;}
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url(assets/img/wallpaper.jpeg);
  background-size: cover;
  height: 100vh;
}

.container {
  min-width: 100vw;
  padding: 0 0 0 0 !important;
}

img {
  max-width: 100%;
}
@media (max-width: 390px) {
  .col {
        min-width: 300px;
        height: 100%;
        margin-top: 2em !important;
    }
}

@media (max-width: 1180px) {
    .col {
        min-width: 400px;
        height: 100%;
        margin-top: 3em !important;
    }
}

a {
    text-decoration: none !important;
}
</style>
