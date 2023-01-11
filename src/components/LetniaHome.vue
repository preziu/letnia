<template>
  <div>
    <img src="../assets/img/LTLogo.png" />
  </div>
</template>

<script>
export default {
  name: 'LetniaHome',
  props: {
    msg: String
  },
  data() {
    return {
      color: "black"
    };
  },
  methods: {
    changeColor() {
      if (this.color == "black") {
        this.color = "blue";
      } else {
        this.color = "black";
      }
      
    }
  }
};
</script>

<style scoped>
button {
  color: v-bind(color)
}

@media (max-width: 390px) {
  img {
    width: 291px;
    height: 202px;
  }
}
</style>
