import { createApp } from 'vue'
import './style.css'
import './assets/index.css'
import App from './App.vue'
import router from "./router";
import '@fortawesome/fontawesome-free/css/all.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')

