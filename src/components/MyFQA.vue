<template>
  <section class="w-full" id="fqa">
    <div class="container mx-auto py-28">
      <h2 class="text-5xl pb-10">Perguntas frequentes</h2>
      <div class="container-carousel  text-blue-900">
        <Carousel :items-to-show="4" :autoplay="7200" :wrap-around="true">
          <Slide v-for="(slide, index) in slides" :key="index">
            <div class="cardItem rounded-lg mx-2">
              <h4 class="pb-1 text-2xl">{{ slide.title }}</h4>
              <p class="mb-4">{{ slide.text }}</p>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'MyFQA',
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
        },
        {
          title: 'Social media',
          text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
        },
        {
          title: 'Logotipo',
          text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
        },
      ],
    };
  },
});
</script>
  
<style scoped>
.cardItem {
  background-color: rgba(255, 252, 252, 0.568);
  padding: 20px 3%;
}
</style>
  