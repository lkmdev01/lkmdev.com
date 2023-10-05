<template>
    <footer class="mx-auto">
        <section class="bg-blue-800 text-branco">
            <div class="container-lg flex sm:justify-center md2:justify-between items-center flex-wrap py-12 px-7">
                <div class="w-full sm:w-auto pb-8 sm:pb-10 md:pb-12 md:pr-5">
                    <h4 class="text-center sm:text-left text-xl lg:text-2xl font-bold">Entre em contato conosco!</h4>
                </div>
                <div
                    class="grid grid-flow-col grid-rows-6 sm:grid-rows-3 grid-cols-1 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2 sm:pl-3 m-0 mx-auto text-center sm:text-left mt-8">
                    <div class="form-group">
                        <label class="title-input block">Nome:</label>
                        <input type="name" class="form-input w-full bg-transparent rounded border border-blue-100">
                    </div>
                    <div class="form-group">
                        <label class="title-input block">Email:</label>
                        <input type="email" class="form-input w-full bg-transparent rounded border border-blue-100">
                    </div>
                    <div class="form-group">
                        <label class="title-input block">Telefone:</label>
                        <input type="tel" class="form-input w-full bg-transparent rounded border border-blue-100">
                    </div>
                    <div class="form-group row-span-2 ">
                        <label class="title-input block">Sua mensagem:</label>
                        <textarea class="form-textarea w-full rounded bg-transparent border border-blue-100 resize-none"
                            rows="5" cols="33"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="my-1 px-10 py-2 border border-blue-100"
                            @click="handleClick">Enviar</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-blue-600 text-gray-400">
            <div class="container-lg flex justify-center sm:justify-between items-center flex-wrap py-7 px-7 text-center">
                <div class="redes-socias block w-full sm:w-auto">
                    <ul class="max-w-46 flex flex-wrap text-2xl">
                        <li class="w-1/4 p-2">
                            <i class="fa-brands fa-whatsapp"></i>
                        </li>
                        <li class="w-1/4 p-2">
                            <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li class="w-1/4 p-2">
                            <i class="fa-brands fa-facebook"></i>
                        </li>
                        <li class="w-1/4 p-2">
                            <i class="fa-brands fa-linkedin"></i>
                        </li>
                    </ul>
                </div>
                <div class="creditos text-center text-sm block mt-5 sm:mt-0 w-full sm:w-auto">
                    <p>
                        © Toazul Agência CNPJ 08.257.844/0001-24.<br> Todos os direitos reservados.
                    </p>
                </div>

                <div class="logo_footer block mt-5 sm:mt-0 sm:w-auto m-0 p-0">
                    <img src="/src/assets/img/logo_escrita.png" alt="Logo Toazul">
                </div>
            </div>
        </section>
    </footer>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MyFooter',
    components: {

    },
    data() {
        return {

        };
    },
    methods: {
        handleClick() {
            alert('Button clicked!');
        },
    },
});
</script>
  
<style scoped>
.container-lg {
    max-width: 1200px;
    margin: 0 auto;
}

.logo_footer img {
    width: 130px;
    max-width: 100%;
    margin: 0;
    padding: 0;
}

/* Responsive */</style>
