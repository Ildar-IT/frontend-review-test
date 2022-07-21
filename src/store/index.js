import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: null,

  },
  getters: {
    products(state) {
      return state.products;
    },

  },
  mutations: {
    products(state, products) {
      state.products = products;
    },

  },
  actions: {
    getProductsList({commit}, data) {
      setTimeout(function run() {
        api.getProductsList()
            .then(response => {
              let data = response.map(el => ({
                id: el.id,
                title: el.title,
                price: el.price,
                image: el.image,
                amount: 0
              }));
              commit('products', data)
            })

        setTimeout(run, 2000)
      }, 0)
    },
  },
  modules: {
  }
})
