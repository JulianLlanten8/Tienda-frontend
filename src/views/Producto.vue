<template>
  <v-card class="mx-auto" max-width="800" outlined>
    <v-card-title> Carrito de compras </v-card-title>
    <v-list-item three-line>
      <v-list-item-avatar tile size="400">
        <img :src="producto.imagen" :alt="producto.nombre" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ producto.nombre }}</v-list-item-title>
        <v-list-item-subtitle class="mt-0">{{
          producto.descripcion
        }}</v-list-item-subtitle>
        <v-text-field
          v-model="cantidad"
          label="Cantidad"
          type="number"
          min="1"
          max="10"
          step="1"
          ><v-icon slot="append" color="red" @click="aumentarCantidad">
            mdi-plus
          </v-icon>
          <v-icon slot="prepend" color="green" @click="disminuirCantidad">
            mdi-minus
          </v-icon></v-text-field
        >
        <v-list-item-subtitle class="d-flex align-center">
          Precio <v-icon>mdi-currency-usd</v-icon> {{ producto.precio }}
        </v-list-item-subtitle>
        <v-card-actions class="d-flex justify-center">
          <v-btn outlined text large color="green"> Comprar </v-btn>
        </v-card-actions>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
import axios from "axios";

export default {
  name: "Producto",
  data: () => ({
    producto: {},
    cantidad: 1,
  }),
  methods: {
    async getAllDataProducto(producto) {
      await axios
        .get(`${this.$api}productos/${producto}`)
        .then((res) => {
          this.producto = res.data.data;
        })
        .catch((err) => {
          alert(err);
        });
    },
    aumentarCantidad() {
      this.cantidad++;
    },
    disminuirCantidad() {
      if (this.cantidad > 1) {
        this.cantidad--;
      }
    },
  },
  created() {
    this.getAllDataProducto(this.$route.params.id);
  },
};
</script>
<style scoped></style>
