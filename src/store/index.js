import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: {},
    producto: {},
  },
  mutations: {
    setProductos(state, productos) {
      state.productos = productos;
    },
    setProducto(state, producto) {
      state.producto = producto;
    },
  },
  actions: {
    setProductos({ commit }, productos) {
      commit("setProductos", productos);
    },
    setProducto({ commit }, producto) {
      commit("setProducto", producto);
    },
  },
  getters: {
    getProductos: (state) => state.productos,
    getProducto: (state) => state.producto,
  },
});
