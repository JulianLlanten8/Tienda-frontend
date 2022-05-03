export default {
  setProductos({ commit }, productos) {
    commit("setProductos", productos);
  },
  setProducto({ commit }, producto) {
    commit("setProducto", producto);
  },
};
