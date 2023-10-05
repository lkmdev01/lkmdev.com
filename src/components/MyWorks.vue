<!-- <template>
    <div id="works__about">
      <div class="container flex justify-center flex-wrap space-y-4">
        <section class="works__section relative rounded-md">
            <div class="works__section__content absolute top-0 left-0 rounded-l-md bg-blue-400 h-full w-2/5">
              <div class="content-text text-start p-12">
                <h3 class="text-2xl	font-bold">Veja nosso Portfolio</h3>
                <p class="py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident amet animi, quas ullam voluptas harum nam vel error aperiam at deserunt sequi accusantium nostrum nesciunt hic iste? Optio, veniam natus?</p>
                <button class="bg-blue-800 py-2 px-4">Ir para Portfolio</button>
              </div>
            </div>
        </section>
        
        <section class="works__section relative rounded-md w-full">
            <div class="works__section__content absolute top-0 right-0 rounded-l-md bg-blue-400 h-full w-2/5">
              <div class="content-text text-start p-12">
                <h3 class="text-2xl	font-bold">Veja nosso Portfolio</h3>
                <p class="py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident amet animi, quas ullam voluptas harum nam vel error aperiam at deserunt sequi accusantium nostrum nesciunt hic iste? Optio, veniam natus?</p>
                <button class="bg-blue-800 py-2 px-4">Ir para Portfolio</button>
              </div>
            </div>
        </section>

        <section class="works__section relative rounded-md">
            <div class="works__section__content absolute top-0 left-0 rounded-l-md bg-blue-400 h-full w-2/5">
              <div class="content-text text-start p-12">
                <h3 class="text-2xl	font-bold">Veja nosso Portfolio</h3>
                <p class="py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident amet animi, quas ullam voluptas harum nam vel error aperiam at deserunt sequi accusantium nostrum nesciunt hic iste? Optio, veniam natus?</p>
                <button class="bg-blue-800 py-2 px-4">Ir para Portfolio</button>
              </div>
            </div>
        </section>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent } from 'vue';
    import 'vue3-carousel/dist/carousel.css';
  
    export default defineComponent({
      name: 'MyWorks',
      components: {

      },
      data() {
        return {
          
        };
      },
    });
  </script>
  
  <style scoped>
    #works__about{
        background-color: white;
    }

    #works__about .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 0;
    }

    section.works__section{
      width: 100%;
      height: 400px;
      background-color: rgb(139, 170, 236);
    }

  </style>
   -->

   <template>
    <section id="works__about" class="bg-white bg-white">
      <div class="container mx-auto py-12 px-7 flex flex-wrap space-y-8 justify-center">
        <section class="works__section1 relative rounded-md w-screen">
            <div class="works__section__content absolute top-0 left-0 px-12 py-16 rounded-l-md h-full sm:w-3/5 md:w-2/5 bg-gradient-to-right text-start">
                <h3 class="sm:text-xl md:text-lg lg:text-3xl lg:leading-10 font-bold text-branco"><b>Sites</b> e <b>Sistemas</b></h3>
                <p class="md:text-sm lg:text-base pt-2 pb-3 text-gray-300">Aqui, apresentamos uma seleção cuidadosamente escolhida de sites e sistemas que criamos, para demonstrar nosso trabalho e habilidades.</p>
                <button class="bg-blue-800 py-2 px-4">Ir para Portfolio</button>
            </div>
        </section>
        <section class="works__section2 relative rounded-md w-screen">
            <div class="works__section__content absolute top-0 right-0 rounded-r-md h-full sm:w-3/5 md:w-2/5 bg-gradient-to-left text-right">
              <div class="content_text relative h-full w-full px-8 py-16">
                <h3 class="sm:text-xl md:text-lg lg:text-3xl lg:leading-10 font-bold text-branco"><b>Marketing Digital</b> e <b>Redes Sociais</b></h3>
                <p class="md:text-sm lg:text-base pt-2 pb-3 text-gray-300">Nossa seleção de trabalhos de marketing digital e redes sociais exibe nosso conhecimento e expertise em criar campanhas efetivas
                  que atendem aos objetivos de negócio de nossos clientes.</p>
                  <button class="bg-blue-800 py-2 px-4">Ir para Portfolio</button>
              </div>
            </div>
        </section>
      </div>
    </section>
  </template>
  
  <script lang="ts">
    import { defineComponent } from 'vue';
    import 'vue3-carousel/dist/carousel.css';
  
    export default defineComponent({
      name: 'MyWorks',
      components: {

      },
      data() {
        return {
          
        };
      },
    });
  </script>
  
  <style scoped>
    .bg-gradient-to-right {
      background-image: linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.233));
      background-size: cover;
      background-position: center center;
    }

    .bg-gradient-to-left {
      background-image: linear-gradient(to left, rgb(0, 0, 0), rgba(0, 0, 0, 0.233));
      background-size: cover;
      background-position: center center;
    }

    #works__about .container{
      max-width: 1200px;
    }

    section.works__section1,section.works__section2{
      width: 100%;
      height: 400px;
      background-size: cover;
      background-position: center;
    }

    section.works__section1{
       background-image: url('/src/assets/img/bg-section1.png'); 
    }
    section.works__section2{
      background-image: url('/src/assets/img/bg-section2.png');
    }
  </style>
  