<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TypesClientes',
    components: {
      
    },
    data() {
      return {
        person1_img: './src/assets/img/person1.png',
        person2_img: './src/assets/img/person2.png',
        person3_img: './src/assets/img/person3.png',
      };
    },
  });
</script>

<template>
    <section class="typesclientes">
        <div class="container py-5">
            <h3>Quem são os nossos clientes</h3>
            <div class="group__card flex  space-x-4">
                <div class="card w-1/3 bg-blue-800 rounded-md drop-shadow-md">
                    <img :src="person1_img" alt="">
                    <h5 class="py-2">Empreendedor</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.</p>
                </div>
                <div class="card w-1/3 bg-blue-800 rounded-md drop-shadow-md">
                    <img :src="person2_img" alt="">
                    <h5 class="py-2">Empresas</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.</p>
                </div>
                <div class="card w-1/3 bg-blue-800 rounded-md drop-shadow-md">
                    <img :src="person3_img" alt="">
                    <h5 class="py-2">Figura publica</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .typesclientes{
        background-color: #e9f8fffd;
    }

    .typesclientes .container{
        position: relative;
        width: 1000px;
        padding: 40px 0;
        margin: 0 auto;
    }


    .typesclientes h3{
        font-size: 26px;
        color: rgb(26, 26, 26);
    }

    .group__card{
        margin: 0 auto;
        padding: 20px;
    }
</style>
