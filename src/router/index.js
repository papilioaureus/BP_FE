import Vue from "vue";
import VueRouter from "vue-router";
import WelcomePage from "../components/WelcomePage.vue";
import Skull from "../components/Skull.vue";
import AppAccounts from "../components/AppAccounts.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
  },

  
  {
    path: "/skull",
    name: "Skull",
    component: Skull,
  },


  {
    path: "/accounts",
    name: "AppAccounts",
    component: AppAccounts,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
