<template>
  <div>
    <v-navigation-drawer :color="color" dark app>
      <v-card class="mx-auto" max-width="300" tile :color="color">
        <v-card :color="color" dark max-width="300">
          <v-card-title>Nuestras tiendas</v-card-title>

          <v-img
            height="200"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80cards/cooking.png"
          ></v-img>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions class="display-flex justify-center">
            <v-btn text> Nuestras Tiendas </v-btn>
          </v-card-actions>
        </v-card>

        <v-list dense>
          <v-card-subtitle class="display-flex justify-center"
            >Categorias</v-card-subtitle
          >
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              v-for="(itemM, m) in categoriasMujer"
              :key="'m' + m"
              class="mb-2"
            >
              <v-list-item-icon>
                <v-icon v-text="itemM.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="itemM.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider color="white" class="mx-5"></v-divider>
            <v-list-item
              v-for="(itemH, h) in categoriasHombre"
              :key="'h' + h"
              class="mt-2"
            >
              <v-list-item-icon>
                <v-icon v-text="itemH.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="itemH.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      color: "dark",
      selectedItem: 1,
      categoriasMujer: [
        { text: "Moda Mujer", icon: "mdi-face-woman-shimmer-outline" },
        { text: "Calzado Mujer", icon: "mdi-shoe-heel" },
        { text: "Accesorios Mujer", icon: "mdi-shimmer" },
      ],
      categoriasHombre: [
        { text: "Moda Hombre", icon: "mdi-account-tie-hat" },
        { text: "Calzado Hombre", icon: "mdi-shoe-formal" },
        { text: "Accesorios Hombre", icon: "mdi-shoe-cleat" },
      ],
    };
  },
};
</script>
<style scoped>
.list__tile__title {
  white-space: normal !important;
  text-overflow: wrap !important;
  word-wrap: break-word;
}
.v-application .primary--text {
  color: #ffffff !important;
}
</style>
