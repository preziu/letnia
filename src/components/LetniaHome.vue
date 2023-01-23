<template>
  <div>
    <img src="../assets/img/3d2.gif" />
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
@media (max-width: 390px) {
  img {
    width: 291px;
    height: 202px;
    margin-top: 2em
  }
}
</style>
