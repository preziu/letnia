<template>
  <div class="container">
      <router-view />
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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

body {
  display: inline-block;
}

body:before {
  content: "";
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: url(assets/img/wallpaper.jpeg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media (max-width: 390px) {
  .bg-image {
    background-repeat: repeat;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
</style>
