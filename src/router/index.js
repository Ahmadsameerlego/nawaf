import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import departmentsView from "../views/departmentsView";
import favView from "../views/favView";
import contactView from "../views/contactView";
import catogryView from "../views/catogryView";

import uploadAds from '../views/uploadAd'
import adsPayment from '../views/adsPayment.vue'
import successAd from '../views/succesAd.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/depatments",
    name: "departments",
    component: departmentsView,
  },
  {
    path: "/favView",
    name: "favView",
    component: favView,
  },
  {
    path: "/contactView",
    name: "contactView",
    component: contactView,
  },
  {
    path: "/catogryView/:id",
    name: "catogryView",
    component: catogryView,
  },
  {
    path : '/uploadAds',
    name : 'uploadAds',
    component : uploadAds
  },
  {
    path:'/adsPayment',
    name : 'adsPayment',
    component : adsPayment
  },
  {
    path : '/successAd',
    name : 'successAd',
    component : successAd
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
