<template>
  <main id="home">

    <!-- page carousal  -->
    <homeCarousal />

    <!-- page parts  -->
    <homeCates />

    <!-- explore ads   -->
    <expolerAds />

    <!-- delivery company  -->
    <deliveryCompany />

    <!-- home details  -->
    <homeDetails />

    <!-- upload ad  -->
    <uploadAd />

    <!-- login component  -->
    <loginComponent />
    

  </main>
</template>

<script>
import { defineComponent } from 'vue';
import homeCarousal from '../components/home/HomeCarousal.vue';
import homeCates from '../components/home/homeCategories.vue';
import expolerAds from '../components/home/exploreAds.vue';
import deliveryCompany from '../components/home/deliveryCompany.vue';
import homeDetails from '../components/home/homeDetails.vue';
import uploadAd from '../components/home/uploadAd.vue';
import loginComponent from '../components/auth/loginComponent.vue'

export default defineComponent({
  name: 'HomeView',
  data(){
    return{
    }
  },


  components: {
    homeCarousal,
    homeCates,
    expolerAds,
    deliveryCompany,
    homeDetails,
    uploadAd,
    loginComponent
  },
});
</script>
