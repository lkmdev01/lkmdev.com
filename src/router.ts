import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import PresencaDigital from "./views/PresencaDigital.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/presencadigital",
    name: "PresencaDigital",
    component: PresencaDigital,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
