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
import conditionsView from "../views/conditionsView";

import uploadAds from "../views/uploadAd";
import adsPayment from "../views/adsPayment.vue";
import successAd from "../views/succesAd.vue";
import profileView from "../views/profileView.vue";
import republishAdd from "../views/republishAdd.vue";
import componiesView from "../views/componiesView.vue";
import notFoundView from "../components/NotFound/notFoundView";
import publicAds from '../views/publicAds.vue'



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
    meta : { requiresAuth : true }
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
    meta:{ requiresAuth : true}
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
    meta:{ requiresAuth : true}
  },
  {
    path: "/notificationsView",
    name: "notificationsView",
    component: notificationsView,
  },
  {
    path: "/uploadAds",
    name: "uploadAds",
    component: uploadAds,
    meta : { requiresAuth : true }

},{
    path : '/uploadAds',
    name : 'uploadAds',
    component : uploadAds,
    meta : { requiresAuth : true }

  },
  {
    path: "/adsPayment",
    name: "adsPayment",
    component: adsPayment,
  },
  {
    path: "/successAd",
    name: "successAd",
    component: successAd,
  },
  {
    path: "/conditionsView",
    name: "conditionsView",
    component: conditionsView,
  },
  {
    path: "/profileView/:id",
    name: "profileView",
    component: profileView,
  },
  {
    path: "/republishAdd",
    name: "republishAdd",
    component: republishAdd,
  },
  {
    path: "/componiesView",
    name: "componiesView",
    component: componiesView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: "notFoundView",
    component: notFoundView,
  },
  {
    path : '/publicAds/:id',
    name : 'publicAds',
    component :     publicAds
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if ( localStorage.getItem('IsLoggedIn') == 'false' || !localStorage.getItem('IsLoggedIn') ) {
      next({ name: 'home' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})




export default router;
