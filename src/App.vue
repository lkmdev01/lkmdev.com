<script setup lang="ts">

</script>

<template>
  <div class="container__nav">
    <!-- <nav class="  w-screen py-4 px-2 shadow-sm flex justify-between max-w-full">
      <div class="section__one">
        <img src="./assets/img/toazul.png" alt="Logo Toazul">
      </div>
      <div class="section__two space-x-4">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Serviços</router-link>
        <router-link to="/about">Sobre</router-link>
        <router-link to="/about">Portfolio</router-link>
        <router-link to="/about" class="bg-blue-800 py-2 px-3 rounded-md">Contato</router-link>
      </div>
    </nav> -->
    <div class="app__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.container__nav {
  background-color: #87C0CD;
}

nav {

  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.section__one img {
  width: 70px;
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>
