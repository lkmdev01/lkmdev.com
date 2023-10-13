<template>
  <header class="bg-myblue">
    <div class="container py-48 px-3 flex flex-wrap justify-center">
      <div class="
      content-text text-start max-w-2xl mr-auto">
        <h3 class="text-4xl font-bold">Criação de sites e sistemas</h3>
        <p>Nosso serviço de criação de sites e sistemas combina criatividade, funcionalidade e usabilidade para oferecer
          uma experiência excepcional aos seus visitantes.</p>
      </div>
    </div>
  </header>
  <article class="relative">
    <section class="w-full">
      <div class="container py-28 flex flex-wrap justify-center">
        <h3 class="text-4xl w-full">Beneficios do serviço</h3>
        <div class="container-slide relative mt-10">
          <Carousel :items-to-show="5.5" :wrap-around="true" :transition="500">
            <Slide v-for="(slide, index) in slides" :key="index">
              <div class="carousel__item bg-slate-300 px-16 py-20 rounded-md mx-1">
                <i :class="slide.icon"></i>
                <h4>{{ slide.title }}</h4>
                <p>{{ slide.text }}</p>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="py-28 px-3 flex flex-wrap ">
          <div class="content-text text-end">
            <h3 class="text-4xl">Responsividade</h3>
            <p>Nosso serviço de criação de sites e sistemas combina criatividade, funcionalidade e usabilidade para
              oferecer uma experiência excepcional aos seus visitantes.</p>
          </div>
        </div>
        <div class="py-28 px-3 flex flex-wrap">
          <div class="content-text text-start">
            <h3 class="text-4xl">Seo - </h3>
            <p>Nosso serviço de criação de sites e sistemas combina criatividade, funcionalidade e usabilidade para
              oferecer uma experiência excepcional aos seus visitantes.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full bg-blue-500">
      <div class="container py-20 px-3 flex flex-wrap">
        <div class="content-text text-center">
          <h3 class="text-4xl">Algumas das tecnlogias usadas</h3>
          <p>Nosso serviço de criação de sites e sistemas combina criatividade, funcionalidade e usabilidade para oferecer
            uma experiência excepcional aos seus visitantes.</p>
        </div>
        <div class="slide">
          <div class="container-slide flex items-center shadow-sm py-10">
            <Carousel :v-bind="settings" :breakpoints="breakpoints" :autoplay="2000" :wrap-around="true">
              <Slide v-for="(image, index) in img_slide" :key="index">
                <div class="slide-container">
                  <img :src="image" class=" w-16 lg:w-16">
                </div>
              </Slide>
              <template #addons>
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
    <WorkingModel class="py-20"></WorkingModel>
  </article>
  <MyFooter></MyFooter>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WorkingModel from '../components/WorkingModel.vue';
import MyFooter from '../components/MyFooter.vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';


import iconFacebook from '/src/assets/img/empresas/icon-facebook.png';
import iconGoogle from '/src/assets/img/empresas/icon-google.png';
import iconMicrosoft from '/src/assets/img/empresas/icon-microsoft.png';
import iconUber from '/src/assets/img/empresas/icon-uber.png';
import iconXiaomi from '/src/assets/img/empresas/icon-xiaomi.png';
import iconWikipedia from '/src/assets/img/empresas/icon-wikipedia.png';
import iconTypeform from '/src/assets/img/empresas/icon-typeform.png';
import iconShopify from '/src/assets/img/empresas/icon-shopify.png';
import iconHuawei from '/src/assets/img/empresas/icon-huawei.png';
import iconCanva from '/src/assets/img/empresas/icon-canva.png';
import iconAsana from '/src/assets/img/empresas/icon-asana.png';
import iconAlibaba from '/src/assets/img/empresas/icon-alibaba.png';
import iconNetflix from '/src/assets/img/empresas/icon-netflix.png';
import iconApple from '/src/assets/img/empresas/icon-apple.png';


export default defineComponent({
  name: 'Services',
  components: {
    Carousel,
    Slide,
    Navigation,
    WorkingModel,
    MyFooter
  },
  data() {
    return {
      settings: {
        itemsToShow: 4.5,
        snapAlign: 'center',
      },
      breakpoints: {
        // 700px and up
        320: {
          itemsToShow: 4.5,
          snapAlign: 'center',
        },
        // 700px and up
        640: {
          itemsToShow: 5.5,
          snapAlign: 'center',
        },
        // 700px and up
        768: {
          itemsToShow: 6.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 8.5,
          snapAlign: 'start',
        },
      },
      img_slide: [
        iconFacebook,
        iconGoogle,
        iconMicrosoft,
        iconUber,
        iconXiaomi,
        iconWikipedia,
        iconTypeform,
        iconShopify,
        iconHuawei,
        iconCanva,
        iconAsana,
        iconAlibaba,
        iconNetflix,
        iconApple,
      ],
      slides: [
        {
          title: 'Titulo 1',
          text: 'texto',
          icon: 'fa-brands fa-google',
        },
        {
          title: 'Titulo 1',
          text: 'texto',
          icon: 'fa-solid fa-wifi',
        },
        {
          title: 'Titulo 1',
          text: 'texto',
          icon: 'fa-brands fa-whatsapp',
        },
        {
          title: 'Titulo 1',
          text: 'texto',
          icon: 'fa-solid fa-clock',
        },
        {
          title: 'Titulo 1',
          text: 'texto',
          icon: 'fa-solid fa-database',
        },
        {
          title: 'Titulo 1',
          text: 'texto',
          icon: 'fa-solid fa-address-card',
        },
      ],
    };
  },
  methods: {
    // Seus métodos aqui
  },
});


</script>

<style scoped>
header .container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

article .container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  flex: flex-wrap justify-between;
}

.container-slide {
  max-width: 1000px;
}


.carousel {
  width: 100%;
  position: static;
}

.slide-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
}


@media (max-width: 640px) {
  .carousel {
    max-width: 100%;
  }
}
</style>
