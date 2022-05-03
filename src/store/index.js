import Vue from "vue";
import Vuex from "vuex";
import Productos from "./modules/productos";
import Auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productos: Productos,
    auth: Auth,
  },
});
