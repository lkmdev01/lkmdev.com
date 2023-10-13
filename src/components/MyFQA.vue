<template>
  <section class="w-full" id="fqa">
    <div class="container mx-auto py-28">
      <h2 class="text-5xl pb-10">Perguntas frequentes</h2>
      <div class="container-carousel text-blue-900">
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="(slide, index) in slides" :key="index">
            <div class="cardItem rounded-md mx-2">
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
import { defineComponent, Ref, ref } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

interface SlideData {
  title: string;
  text: string;
}

export default defineComponent({
  name: 'MyFQA',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  setup() {
    const slides: Ref<SlideData[]> = ref([
      {
        title: 'Pergunta',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
      },
      {
        title: 'Pergunta',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
      },
      {
        title: 'Pergunta',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
      },
      {
        title: 'Pergunta',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
      },
      {
        title: 'Pergunta',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
      },
      {
        title: 'Pergunta',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.',
      },
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
    ]);

    const settings = ref({
      autoplay: 7200,
      wrapAround: true,
    });

    const breakpoints = ref({
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    });

    return {
      slides,
      breakpoints,
      settings,
    };
  },
});
</script>

<style scoped>
.cardItem {
  background-color: rgba(255, 255, 255, 0.89);
  padding: 20px 3%;
}


.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}

.carousel__pagination {
  position: absolute;
  bottom: 0;
}
</style>
