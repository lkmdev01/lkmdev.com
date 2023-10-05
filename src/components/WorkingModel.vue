<template>
    <div id="working__about">
      <div class="container flex justify-center">
        <div class="working__text w-5/12 pr-5 text-start">
          <h3 class="text-4xl	pb-2">Nosso modelo de trabalho</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Illo laudantium doloremque amet quam adipisci, suscipit nemo unde perferendis itaque
            ratione mollitia dolor iusto ducimus repellendus corrupti voluptate quas expedita deleniti!
          </p>
        </div>
        <div class="working__img w-7/12">
          <Carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
            <Slide v-for="(slide, index) in slides" :key="index">
              <div class="slide-container">
                <img :src="slide.src" alt="slide">
              </div>
            </Slide>
          </Carousel>
          
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent } from 'vue';
    import { Carousel, Slide, Pagination } from 'vue3-carousel';
    import 'vue3-carousel/dist/carousel.css';
  
    export default defineComponent({
      name: 'WorkingModel',
      components: {
        Carousel,
        Slide,
      },
      data() {
        return {
          slides: [
            { src: ('./src/assets/img/trello1.png') },
            { src: ('./src/assets/img/trello2.png') },
            { src: ('./src/assets/img/trello3.png') },
          ],
        };
      },
    });
  </script>
  
  <style scoped>
    #working__about .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 0;
    }
  </style>
  