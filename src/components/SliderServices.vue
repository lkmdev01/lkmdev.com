<template>
  <div class="services">
    <div class="carousel-container">
      <Carousel :items-to-show="1" :autoplay="7200" :wrap-around="true">
        <Slide v-for="(slide, index) in slides" :key="index">
          <div class="slide-container">
            <div class="text-container">
              <h2 class="pb-1">{{ slide.title }}</h2>
              <p class="mb-4">{{ slide.text }}</p>
              <button class="bg-blue-800 py-2 px-4">{{ slide.button }}</button>
            </div>
          </div>
        </Slide>
  
        <template #addons>
          <Navigation class="text-red-800"/>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css';
  
  export default defineComponent({
    name: 'MyHeader',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data() {
      return {
        slides: [
          {
            title: 'Criação de sites',
            text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
            button: 'Entrar em contato'
          },
          {
            title: 'Social media',
            text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
            button: 'Entrar em contato'
          },
          {
            title: 'Logotipo',
            text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
            button: 'Entrar em contato'
          },
        ],
      };
    },
  });
</script>
  
<style scoped>
  .services{
    margin: 60px 0 80px 0;
  }

  h2{
    font-size: 24px;
    color: white;
  }

  p{
    padding: 0 3%;
    color: white;
  }

  .carousel-container{
    max-width: 900px;
    margin: 0 auto;
  }

</style>
  