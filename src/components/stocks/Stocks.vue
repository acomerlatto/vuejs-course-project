<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from "./Stock.vue";

  export default {
    name : "Stocks",
    components : {
      appStock : Stock
    },
    data() {
      return {
        stocks : [
          { id : 1, name : 'Google', price : 200 },
          { id : 2, name : 'Twitter', price : 200 },
          { id : 3, name : 'Facebook', price : 200 },
          { id : 4, name : 'Microsft', price : 200 },
        ]
      };
    }
  };
</script>

<style scoped>

</style>