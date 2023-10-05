<template>
  <header>
    <div class="flex container justify-center mx-auto">
      <div class="carousel-container w-6/12 flex items-center">
        <Carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
          <Slide v-for="(slide, index) in slides" :key="index">
            <div class="slide-container">
              <h2>{{ slide.title }}</h2>
              <p class="max-w-lg mx-auto px-2">{{ slide.text }}</p>
              <a :href="slide.link__button" target="_blank">
                <button class="bg-blue-800 py-2 px-4 rounded">{{ slide.text__button }}</button>
              </a>
            </div>
          </Slide>

          <template #addons>
          </template>
        </Carousel>
      </div>
      <img class="w-6/12" :src="img" alt="notas importantes" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'MySlide',
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

<style scoped> h2 {
   font-size: 29px;
 }

 header {
   background-color: #5a98b5fd;
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
 }

 @media (max-width: 640px) {
   .carousel {
     max-width: 100%;
   }
 }
</style>
