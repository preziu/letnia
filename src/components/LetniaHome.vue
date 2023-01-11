<template>
  <div>
    <button @click="changeColor">Zmień kolor</button>
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
</style>
