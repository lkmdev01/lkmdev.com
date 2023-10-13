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
        <router-link to="/about" class="bg-myblue py-2 px-3 rounded-md">Contato</router-link>
      </div>
    </nav> -->
    <div class="app__content">
      <router-view></router-view>
    </div>
  </div>
</template>

