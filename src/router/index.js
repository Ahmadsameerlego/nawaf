import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import departmentsView from "../views/departmentsView";
import favView from "../views/favView";
import contactView from "../views/contactView";
import catogryView from "../views/catogryView";
import catogryDetails from "../views/catogryDetails";
import favDetails from "../views/favDetails";
import editProfileView from "../views/editProfileView";
import ratingView from "../views/ratingView";
import advertisementsView from "../views/advertisementsView";
import notificationsView from "../views/notificationsView";

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
    path: "/catogryDetails/:id",
    name: "catogryDetails",
    component: catogryDetails,
  },
  {
    path: "/favDetails/:id",
    name: "favDetails",
    component: favDetails,
  },
  {
    path: "/editProfileView",
    name: "editProfileView",
    component: editProfileView,
  },
  {
    path: "/ratingView",
    name: "ratingView",
    component: ratingView,
  },
  {
    path: "/advertisementsView",
    name: "advertisementsView",
    component: advertisementsView,
  },
  {
    path: "/notificationsView",
    name: "notificationsView",
    component: notificationsView,
  },
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
