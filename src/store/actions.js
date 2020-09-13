import axios from "axios";

export const loadData = ( { commit } ) => {
  axios.get('https://aphelion-project.firebaseio.com/data.json')
    .then(( { data } ) => {
      if ( data ) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds
        };

        commit('stocks/setStocks', stocks);
        commit('portfolio/setPortfolio', portfolio);
      }
    });
};