<template v-once>
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
    <v-row v-for="rows in 3" :key="rows.id">
      <v-col v-for="item in 3" :key="item.id">
        <v-skeleton-loader
          v-if="loading"
          :loading="loading"
          class="mx-auto"
          max-width="300"
          type="card"
        >
        </v-skeleton-loader>
      </v-col>
    </v-row>
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
    loading: false,
  }),

  methods: {
    async obtenerProductos() {
      this.loading = true;
      await axios
        .get(`${this.$api}productos`)
        .then((res) => {
          const data = res.data.data;
          this.$store.dispatch("setProductos", data);
          this.productos = this.$store.getters.getProductos;
        })
        .catch((err) => {
          alert(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    irProducto(id) {
      this.$router.push({ name: "Producto", params: { id: id } });
    },
  },

  created() {
    if (Object.keys(this.productos) <= 0) {
      this.obtenerProductos();
    } else {
      this.productos = this.$store.getters.getProductos;
    }
  },
};
</script>
