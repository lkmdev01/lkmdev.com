<template>
    <footer>
        <div class="container-lg">
            <div class="row justify-around content-center items-center text-gray-400 py-10">
                <div class="col text-branco" id="footerLinks">
                    <h4 class="font-bold pb-1">Links importantes do site</h4>
                    <ul class="text-start">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div class="col" id="footerContacts">
                    <div class="flex flex-col flex-wrap justify-center sm:justify-between  gap-y-9 py-7 px-7
                    text-start">
                        <div id="footerFormm">
                            <h4 class="font-bold py-1">Fale conosco</h4>
                            <form action="">
                                <input type="text" name="" class="px-2 h-10" placeholder="Your adress email" id="">
                                <input type="submit" value="enviar" class="bg-blue-500 px-3 h-10">
                            </form>
                        </div>
                        <div class="redes-socias block sm:w-auto">
                            <h4 class="font-bold py-1">Redes sociais</h4>
                            <ul class="w-40 relative flex flex-wrap text-2xl">
                                <li class="w-1/4 px-2">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </li>
                                <li class="w-1/4 px-2">
                                    <i class="fa-brands fa-instagram"></i>
                                </li>
                                <li class="w-1/4 px-2">
                                    <i class="fa-brands fa-facebook"></i>
                                </li>
                                <li class="w-1/4 px-2">
                                    <i class="fa-brands fa-linkedin"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col" id="footerBanner">
                    <div class="banner w-72 h-72 bg-slate-300">
                        <b class="text-center">BANNER</b>
                    </div>
                </div>
            </div>
        </div>
        <div class="row copy">
            <div class="creditos text-center text-sm block mt-5 sm:mt-0 w-full sm:w-auto">
                <p>
                    © Toazul Agência CNPJ 08.257.844/0001-24.<br> Todos os direitos reservados.
                </p>
            </div>
        </div>
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
footer {
    background-color: #27314d;
}

#footerLinks ul li {
    padding: 5px 0;
}

footer .copy {
    background-color: #222b44;
}



/* Responsive */
</style>
