<template>
  <section class="p-0 m-0 bg-white">
    <div class="container-lg mx-auto md:py-8 lg:py-12">
      <h3 class="sm:text-xl sm:py-5 lg:text-4xl text-center py-2 font-normal text-myblue">Usamos as mesmas tecnlogias
        das grandes empresas mundiais</h3>
      <div class="carousel-container flex items-center shadow-sm py-10">
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
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
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
  name: 'MySlide',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      settings: {
        itemsToShow: 4.5,
        snapAlign: 'center',
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
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
    };
  },
});
</script>

<style scoped>
.carousel-container {
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
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

.carousel__pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

button {
  margin-top: 1rem;
}

@media (max-width: 640px) {
  .carousel {
    max-width: 100%;
  }
}
</style>
