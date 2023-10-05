<template>
  <header class="py-40 relative">
    <div class="row absolute top-0 flex justify-between py-5 px-6 w-full z-20">
      <div class="col">
        <img class="w-32  px-5 py-2" src="/img/logo-redonda.png" alt="">
      </div>
      <div class="col">
        <div class="redes px-5 bg-black rounded-full redes shadow-md">
          <ul class="max-w-46 flex flex-wrap text-2xl py-1">
            <li class="w-1/4 px-2">
              <i class="fa-brands fa-whatsapp"></i>
            </li>
            <li class="w-1/4 px-2">
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li class="w-1/4 px-2">
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li class="w-1/4 px-2">
              <i class="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex container justify-center mx-auto z-20 relative">
      <div class="carousel-container w-8/12 flex items-center">
        <Carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
          <Slide v-for="(slide, index) in slides" :key="index">
            <div class="slide-container z-20">
              <h2
                class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-center dark:text-white z-20">
                {{ slide.title }}</h2>
              <p class="max-w-lg mx-auto px-2 pt-2">{{ slide.text }}</p>
              <a :href="slide.link__button" target="_blank">
                <button class="shadow-lg py-2 px-10 rounded-full">{{ slide.text__button }}</button>
              </a>
            </div>
          </Slide>
          <template #addons>
          </template>
        </Carousel>
      </div>
    </div>
    <div class="sombra-bottom-big z-10"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'NewHeader',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      img: './src/assets/img/banner2.png',
      slides: [
        {
          title: 'Quem somos',
          text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
          text__button: 'Saiba mais',
          link__button: 'https://stackoverflow.com/questions/2906582/how-do-i-create-an-html-button-that-acts-like-a-link'
        },
        {
          title: 'Como trabalhamos',
          text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
          text__button: 'Saiba mais',
          link__button: 'https://tailwindcss.com/docs/border-width'
        },
        {
          title: 'A importancia dos nossos serviços',
          text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
          text__button: 'Veja nossos serviços',
          link__button: 'https://ismail9k.github.io/vue3-carousel/examples.htmlhttps://ismail9k.github.io/vue3-carousel/examples.html'
        },
      ],
    };
  },
});
</script>

<style scoped> .sombra-bottom-big {
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 41rem;
   background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #2F3B5D 90%, #2F3B5D 100%);
 }

 .sombra-bottom-medium {
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 14rem;
   background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #2F3B5D 90%, #2F3B5D 100%);
 }

 .sombra-bottom-small {
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 5rem;
   background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #2F3B5D 90%, #2F3B5D 100%);
 }

 .sombra-top-big {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 41rem;
   background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, black 90%, black 100%);
 }

 .sombra-top-medium {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 14rem;
   background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, black 90%, black 100%);
 }

 .sombra-top-medium {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 14rem;
   background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, black 90%, black 100%);
 }

 header {
   background-color: #2f3b5d;
   background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
   /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
 }

 h2 {
   text-shadow:
     -1px -1px 0px #000000,
     -1px 1px 0px #000000,
     1px -1px 0px #000000,
     1px 0px 0px #000000;
 }

 .redes {
   background-color: #2f3b5dad;
 }

 .redes i {
   color: #685a35;
 }

 .redes i:hover {
   color: #817042;
 }

 .carousel-container {
   position: relative;
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
   background-color: #37456b;
 }

 @media (max-width: 640px) {
   .carousel {
     max-width: 100%;
   }
 }
</style>
