<template>
    <header>
        <div class="container">
            <div class="col text-start">
                <span>Saiba mais sobre nós -</span>
                <h2>
                    <b>Guia Produtivo</b> de
                    Desenvolvimento do seu
                    Negocio no digital
                </h2>
            </div>
            <div class="col">
                <img src="" alt="">
            </div>
        </div>
    </header>
    <section>
        <div class="container">
            <div class="col">
                <img src="" alt="">
            </div>
            <div class="col text-start">
                <p>
                    <b>Somos</b> os condutores da sua jornada rumo ao sucesso digital. O sucesso digital é a realização dos
                    seus
                    objetivos na internet, podendo ser o aumento da sua clientela, uma imagem de marca renovada ou outras
                    metas essenciais. O sucesso digital é a consequência do desenvolvimento da sua empresa nesse cenário, e
                    é onde entramos. Simplificamos o caminho, oferecendo orientação e estratégia. Nossa trajetória iniciou
                    durante a pandemia, quando reconhecemos a demanda dos empreendedores por destaque na internet.
                </p>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="col text-start">
                <p>
                    <b>O que fazemos?</b><br>
                    Na LKM Dev, nosso propósito é desenvolver negócios no ambiente digital, visando o sucesso em um cenário
                    em constante mudança. Através dos nossos serviços de criação de sites, sistemas e gerenciamento
                    estratégico de redes sociais, traduzimos essa visão em ações concretas. Gerando posicionamento
                    estratégico no mercado, atraindo potenciais novos clientes, fortalecendo a imagem profissional da sua
                    marca e aumentando a sua credibilidade.
                </p>
            </div>
            <div class="col">
                <img src="" alt="">
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="col">
                <img src="" alt="">
            </div>
            <div class="col text-start">
                <p>
                    <b>Por que somos a melhor opção?</b><br>
                    Somos a melhor escolha porque nosso propósito é o desenvolvimento do seu negócio no ambiente digital. Na
                    LKM Dev, acreditamos na jornada conjunta para alcançar os objetivos. Com foco na criação de sites,
                    sistemas inovadores e gestão estratégica de redes sociais, conduzimos sua marca ao sucesso digital.
                </p>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">

        </div>
    </section>
    <section>
        <div class="container">
            <div class="col">
                <p></p>
            </div>
            <div class="col">
                <img src="" alt="">
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="col">
                <img src="" alt="">
            </div>
            <div class="col">
                <p></p>
            </div>
        </div>
    </section>
    <MyFooter>
    </MyFooter>
</template>
  

  
<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import MyFooter from '../components/MyFooter.vue';

// import trello1 from '/src/assets/images/trello1.png';
// import trello2 from '/src/assets/images/trello2.png';
// import trello3 from '/src/assets/images/trello3.png';

export default defineComponent({
    name: 'WorkingModel',
    components: {
        Carousel,
        Slide,
        MyFooter,
    },
    data() {
        return {
            slides: [
                { src: 'img/slide-about-1.jpg' },
                { src: 'img/slide-about-2.jpg' },
                { src: 'img/slide-about-3.jpg' },
            ],
        };
    },
    methods: {

    },
});
</script>

<style scoped></style>
  