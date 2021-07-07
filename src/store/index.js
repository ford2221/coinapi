import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: []
  },
  mutations: {
    obtenercoins (state, coins){
      state.coins = coins
    }
  },
  actions: {
    getcoins ({commit}) {
      const path = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';
      axios.get(path)
      .then(function (res) {
        commit('obtenercoins', res.data)
        
      }.bind(this))
    }
  }

})

