<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link :to="{name: 'web.home'}" class="navbar-brand">Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link :to="{ name: 'web.portfolio' }" tag="li" active-class="active"><a>Portfolio</a></router-link>
          <router-link :to="{ name: 'web.stocks' }" tag="li" active-class="active"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currencyValue }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li
              class="dropdown"
              :class="{ open: isDropdownOpen }"
              @click="isDropdownOpen = !isDropdownOpen"
          >
            <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
            >Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import axios from "axios";

  import { mapActions } from "vuex";

  export default {
    name : "Header",

    data() {
      return {
        isDropdownOpen : false
      };
    },

    computed : {
      funds() {
        return this.$store.getters['portfolio/funds'];
      }
    },

    methods : {
      ... mapActions({
        randomizeStocks : 'stocks/randomizeStocks',
        fetchData : 'loadData'
      }),

      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds : this.$store.getters['portfolio/funds'],
          stockPortfolio : this.$store.getters['portfolio/stockPortfolio'],
          stocks : this.$store.getters["stocks/stocks"]
        };

        axios.put('https://aphelion-project.firebaseio.com/data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  };
</script>

<style scoped>

</style>