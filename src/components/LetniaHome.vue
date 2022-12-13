<template>
  <div class="container">
    <h3>Letnia kolonia</h3>
    <h1 class="tooltip-inner">Beta testing scss</h1>
   

    <template>
        <div>
           <button @click="changeColor">Zmień kolor</button>
        </div>
    </template>







  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "black"
    };
  },
  methods: {
    changeColor() {
      this.color = "blue";
    }
  }
};
</script>

<script>
export default {
  name: 'LetniaHome',
  props: {
    msg: String
  }
}


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style>
button {
  color: {{ color }};
}
</style>