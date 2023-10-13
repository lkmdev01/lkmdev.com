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
  <nav class="w-full relative bg-myblue">
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
        <div class="card w-96 bg-myblue rounded-md drop-shadow-md">
          <font-awesome-icon :icon="faCoffee" />
          <h5 class="py-2">Titulo 1</h5>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
            I will give.</p>
        </div>
        <div class="card w-96 bg-myblue rounded-md drop-shadow-md">
          <font-awesome-icon :icon="faCoffee" />
          <h5 class="py-2">Titulo 2</h5>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
            I will give.</p>
        </div>
        <div class="card w-96 bg-myblue rounded-md drop-shadow-md">
          <font-awesome-icon :icon="faCoffee" />
          <h5 class="py-2">Titulo 3</h5>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
            I will give.</p>
        </div>
        <div class="card w-96 bg-myblue rounded-md drop-shadow-md">
          <font-awesome-icon :icon="faCoffee" />
          <h5 class="py-2">Titulo 3</h5>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
            I will give.</p>
        </div>
        <div class="card w-96 bg-myblue rounded-md drop-shadow-md">
          <font-awesome-icon :icon="faCoffee" />
          <h5 class="py-2">Titulo 3</h5>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
            I will give.</p>
        </div>
        <div class="card w-96 bg-myblue rounded-md drop-shadow-md">
          <font-awesome-icon :icon="faCoffee" />
          <h5 class="py-2">Titulo 3</h5>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
            I will give.</p>
        </div>
        <div class="card w-96 bg-myblue rounded-md drop-shadow-md">
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
  <section class="w-full relative bg-white" id="socialProof">
    <div class="container-md mb-16 pt-28 pb-32">
      <div class="row relative z-10">
        <h3 class="text-5xl pb-16 text-center mx-auto text-myblue">Impacto da internet nos negocios</h3>
        <div class="gallery pb-5">
          <img src="/img/noticia-quadrada1.png" alt="">
          <img src="/img/noticia-quadrada2.png" alt="">
          <img src="/img/noticia-retangular1.png" alt="">
          <img src="/img/noticia-retangular2.png" alt="">
          <img src="/img/noticia-quadrada1.png" alt="">
          <img src="/img/noticia-quadrada2.png" alt="">
          <img src="/img/noticia-retangular1.png" alt="">
          <img src="/img/noticia-retangular2.png" alt="">
          <img src="/img/noticia-quadrada1.png" alt="">
          <img src="/img/noticia-quadrada2.png" alt="">
          <img src="/img/noticia-retangular1.png" alt="">
          <img src="/img/noticia-retangular2.png" alt="">
        </div>
      </div>
    </div>
    <div class="sombra-bottom-big"></div>
  </section>
  <TypesClientes></TypesClientes>
  <section class="w-full" id="importantLinks">
    <div class="container-md py-28">
      <div class="grid grid-cols-3 gap-4">
        <div class="card">
          <div class="content-text">
            <h3></h3>
            <p></p>
            <button></button>
          </div>
          <div class="content-img">

          </div>
        </div>
        <div class="card">02</div>
        <div class="card">03</div>
        <div class="col-span-2 card flex-row justify-around items-center">
          <div class="content-text text-start">
            <h3 class="text-4xl mb-1">Sites e Sistemas</h3>
            <p>Nossos clientes, são os empreendedores, empresas e figuras públicas, que buscar um novo padrão para o seu
              negócio na internet.</p>
            <button class="btn bg-gray-100 border-gray-800 text-myblue hover:bg-gray-300  mt-2">Neutral</button>
          </div>
          <div class="content-img ml-4 site">
            <img class="max-w-full pt-5" src="/img/icon-site.png" id="icon-site" alt="">
          </div>
        </div>
        <div class="card">05</div>
        <div class="card">06</div>
        <div class="col-span-2 card flex-row justify-around items-center">
          <div class="content-text text-start">
            <h3 class="text-4xl mb-1">Marketing</h3>
            <p>Nossos clientes, são os empreendedores, empresas e figuras públicas, que buscar um novo padrão para o seu
              negócio na internet.</p>
            <button class="btn bg-gray-100 border-gray-800 text-myblue hover:bg-gray-300  mt-2">Neutral</button>
          </div>
          <div class="content-img marketing">
            <img class="max-w-full" src="/img/icon-marketing.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gray-800" id="ctaHome">
    <div class="container-md mx-auto flex flex-wrap justify-around items-center py-28">
      <div class="col">
        <h2 class="text-5xl text-start max-w-xl">
          Faça um orçamento para o desenvolvimento do seu
          negócio.
        </h2>
      </div>
      <div class="col">
        <div class="formMain w-96 bg-white text-gray-700 rounded-md py-8 px-10">
          <h3 class="pb-5 text-3xl text-center">Entre em contato</h3>
          <form action="">
            <div class="inputGroup mb-3 text-start">
              <label>Nome</label>
              <input type="text" placeholder="Digite seu nome..."
                class="bg-transparent input input-bordered w-full max-w-xs mt-1" />
            </div>
            <div class="inputGroup mb-3 text-start">
              <label>Email</label>
              <input type="text" placeholder="Digite seu email..."
                class="bg-transparent input input-bordered w-full max-w-xs mt-1" />
            </div>
            <div class="inputGroup mb-3 text-start">
              <label>Mensagem</label>
              <textarea class="bg-transparent w-full textarea textarea-bordered mt-1"
                placeholder="Digite sua mensagem..."></textarea>
            </div>
            <input type="submit" class="btn w-full" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  </section>
  <MyFQA></MyFQA>
  <MyFooter></MyFooter>
</template>

<style scoped>
.container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
}

.card {
  background-color: rgba(0, 0, 0, 0.096);
  border-radius: 8px;
}

nav>div ul {
  border: 1px solid rgba(255, 255, 255, 0.336);
}

section.beneficios {
  margin: 40px 0;
}

section.beneficios .group__card {
  margin: 0 auto;
  padding: 20px;
}

section.beneficios .card {
  background-color: rgba(0, 0, 0, 0.096);
}

section.cta {
  background-color: #2d5475;
  margin: 0 20px;
  margin-bottom: 30px;
  color: white;
}

section#socialProof .gallery {
  column-count: 4;
  column-gap: 10px;
  margin: 0 auto;
}

section#socialProof .gallery img {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
}

section#importantLinks .content-img.site {
  max-width: 300px;
}

section#importantLinks .content-img.marketing {
  max-width: 250px;
}
</style>
