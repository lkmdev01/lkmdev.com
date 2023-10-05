<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TypesClientes',
    components: {

    },
    data() {
        return {

        };
    },
});
</script>

<template>
    <section class="typesclientes">
        <div class="container py-5">
            <h3 class="text-5xl pb-10">Quem são os nossos clientes</h3>
            <div class="group__card flex  space-x-4">
                <div class="cardItem w-1/3 rounded-md drop-shadow-md">
                    <img src="/img/empreendedor.jpg" alt="">
                    <h5 class="pt-2 text-xl font-bold">Empreendedor</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give.</p>
                </div>
                <div class="cardItem w-1/3 rounded-md drop-shadow-md">
                    <img src="/img/empresario.jpg" alt="">
                    <h5 class="pt-2 text-xl font-bold">Empresas</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give.</p>
                </div>
                <div class="cardItem w-1/3 rounded-md drop-shadow-md">
                    <img src="/img/empresario.jpg" alt="">
                    <h5 class="pt-2 text-xl font-bold">Figura publica</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.typesclientes .container {
    position: relative;
    width: 1000px;
    padding: 40px 0;
    margin: 0 auto;
}

.group__card {
    margin: 0 auto;
    padding: 20px;
}

.cardItem {
    background-color: rgba(0, 0, 0, 0.096);
    padding: 20px 3%;
}
</style>
