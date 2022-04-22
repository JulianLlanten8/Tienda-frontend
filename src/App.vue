<template>
  <v-app>
    <Menu />
    <MenuSuperior />
    <Productos />
  </v-app>
</template>

<script>
import Productos from "@/components/Productos.vue";
import Menu from "@/components/Menu";
import MenuSuperior from "@/components/MenuSuperior";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Productos,
    Menu,
    MenuSuperior,
  },
};
</script>
