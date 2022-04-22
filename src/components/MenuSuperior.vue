<template>
  <v-system-bar app color="dark" dark height="85" class="mb-0">
    <div class="d-flex align-center mr-15">
      <v-img
        alt="Sennova logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="60"
      />
      <v-card-title>TIENDA</v-card-title>
    </div>
    <div class="mr-15">Quienes Somos</div>
    <div class="mr-15">Categorias</div>
    <div class="mr-15">Visitanos</div>
    <v-spacer></v-spacer>
    <v-avatar>
      <img src="@/assets/user.png" alt="user" />
    </v-avatar>
  </v-system-bar>
</template>
