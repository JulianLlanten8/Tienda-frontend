<template>
  <v-app>
    <Menu />
    <MenuSuperior />
    <v-main>
      <v-scroll-x-transition>
        <router-view />
      </v-scroll-x-transition>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu";
import MenuSuperior from "@/components/MenuSuperior";

export default {
  name: "App",
  data: () => ({}),
  components: {
    Menu,
    MenuSuperior,
  },
};
</script>
