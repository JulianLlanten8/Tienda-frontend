<template>
  <v-container fluid>
    <div class="d-flex align-center justify-end" width="300px">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field
        name="name"
        label="Search"
        :value="buscar"
        prepend-inner-icon="mdi-magnify"
        solo
        filled
        dense
        rounded
        width="200px"
      ></v-text-field>
    </div>
    <v-row dense>
      <v-col v-for="p in productos" :key="p.id" cols="4">
        <v-card>
          <v-img
            :src="p.imagen"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="p.nombre"></v-card-title>
          </v-img>

          <v-card-actions class="d-flex aling-center justify-center">
            <v-btn @click="irProducto(p.id)">
              <v-icon color="primary">mdi-shopping-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Productos",

  data: () => ({
    buscar: "",
    productos: {},
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
  }),

  methods: {
    async obtenerProductos() {
      await axios
        .get(this.$api + "productos/")
        .then((res) => {
          this.productos = res.data.data;
        })
        .catch((err) => {
          alert(err);
        });
    },
    irProducto(id) {
      this.$router.push({ name: "Producto", params: { id: id } });
    },
  },

  created() {
    this.obtenerProductos();
  },
};
</script>
