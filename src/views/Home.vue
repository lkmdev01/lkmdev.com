<script setup lang="ts">
import NewHeader from '../components/NewHeader.vue';
import SliderServices from '../components/SliderServices.vue';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TypesClientes from '../components/TypesClientes.vue';
import TechList from '../components/TechList.vue';
import MyFooter from '../components/MyFooter.vue';
import MyFQA from '../components/MyFQA.vue';

</script>

<template>
  <NewHeader></NewHeader>
  <main class="py-5" id="main1">
    <nav class="w-full relative">
      <div class="container flex justify-center">
        <ul class="space-x-4 shadow-sm py-2 px-20 rounded-full">
          <router-link to="/">Home</router-link>
          <router-link to="/services">Serviços</router-link>
          <router-link to="/about">Sobre</router-link>
          <router-link to="/portfolio">Portfolio</router-link>
          <router-link to="/contact">Contato</router-link>
        </ul>
      </div>
    </nav>
    <section class="beneficios w-full">
      <div class="container-lg py-20">
        <h3 class="text-5xl pb-10">Oque agregamos ao seu negócio</h3>
        <div class="group__card flex flex-wrap justify-center gap-5">
          <div class="card w-96 bg-blue-800 rounded-md drop-shadow-md">
            <font-awesome-icon :icon="faCoffee" />
            <h5 class="py-2">Titulo 1</h5>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
              I will give.</p>
          </div>
          <div class="card w-96 bg-blue-800 rounded-md drop-shadow-md">
            <font-awesome-icon :icon="faCoffee" />
            <h5 class="py-2">Titulo 2</h5>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
              I will give.</p>
          </div>
          <div class="card w-96 bg-blue-800 rounded-md drop-shadow-md">
            <font-awesome-icon :icon="faCoffee" />
            <h5 class="py-2">Titulo 3</h5>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
              I will give.</p>
          </div>
          <div class="card w-96 bg-blue-800 rounded-md drop-shadow-md">
            <font-awesome-icon :icon="faCoffee" />
            <h5 class="py-2">Titulo 3</h5>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
              I will give.</p>
          </div>
          <div class="card w-96 bg-blue-800 rounded-md drop-shadow-md">
            <font-awesome-icon :icon="faCoffee" />
            <h5 class="py-2">Titulo 3</h5>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
              I will give.</p>
          </div>
          <div class="card w-96 bg-blue-800 rounded-md drop-shadow-md">
            <font-awesome-icon :icon="faCoffee" />
            <h5 class="py-2">Titulo 3</h5>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
              I will give.</p>
          </div>
          <div class="card w-96 bg-blue-800 rounded-md drop-shadow-md">
            <font-awesome-icon :icon="faCoffee" />
            <h5 class="py-2">Titulo 3</h5>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
              I will give.</p>
          </div>
        </div>
      </div>
    </section>
    <SliderServices></SliderServices>
    <TechList></TechList>
    <section class="w-full relative" id="socialProof">
      <div class="container-lg">
        <div class="cardGroup">
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
        </div>
      </div>
      <div class="sombra-bottom-big"></div>
    </section>
    <TypesClientes></TypesClientes>
    <section class="w-full" id="importantLinks">
      <div class="container-lg">
        <div class="cardGroup">
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
          <div class="cardItem">
          </div>
        </div>
      </div>
    </section>
    <section class="w-full" id="ctaHome">
      <div class="container-md">
        <div class="col">
          <h2></h2>
        </div>
        <div class="col">
          <form action=""></form>
        </div>
      </div>
    </section>
    <MyFQA></MyFQA>
  </main>
  <MyFooter></MyFooter>
</template>

<style scoped>
main#main1 {
  background-color: #2F3B5D;
}

main#main1 .container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
}

main#main1 nav>div ul {
  border: 1px solid rgba(255, 255, 255, 0.336);
}



section.beneficios {
  margin: 40px 0;
}

.group__card {
  margin: 0 auto;
  padding: 20px;
}

section.cta {
  background-color: #2d5475;
  margin: 0 20px;
  margin-bottom: 30px;
  color: white;
}
</style>
