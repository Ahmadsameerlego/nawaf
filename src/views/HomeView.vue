<template>
  <main id="home">

    <!-- loader  -->
    <loader v-if="loader" />

    <!-- page carousal  -->
    <homeCarousal :banners="banners"  />

    <!-- page parts  -->
    <homeCates :categories="categories" />

    <!-- explore ads   -->
    <expolerAds :advertisements="advertisements" :sub_categories_to_filter="sub_categories_to_filter" :categories_to_filter="categories_to_filter" :cities="cities"/>

    <!-- delivery company  -->
    <deliveryCompany :shipping_companies="shipping_companies" />

    <!-- home details  -->
    <homeDetails :advertisers_num="advertisers_num"  :advertisement_num="advertisement_num"  :users_num="users_num" :content_2="content_2" :title_2="title_2" :intro_user_image="intro_user_image" :intro_advertiserment_image="intro_advertiserment_image" :intro_advertiser_image="intro_advertiser_image" />

    <!-- upload ad  -->
    <uploadAd :intro_image="intro_image" :title_1="title_1" :content_1="content_1" />

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
import loginComponent from '../components/auth/loginComponent.vue';


import axios from 'axios';


import loader from '../components/Shared/pageLoader.vue'
export default defineComponent({
  name: 'HomeView',
  data(){
    return{
      banners : [],
      categories : [],
      advertisements : [],
      shipping_companies : [],

      categories_to_filter : [],
      sub_categories_to_filter : [],
      cities : [],


      nav_and_footer_data : {},

      // home details component data 
      intro_advertiser_image : '',
      intro_advertiserment_image : '',
      intro_user_image : '',
      title_2 : '',
      content_2 : '',
      users_num : '',
      advertisement_num : '',
      advertisers_num :'',

      // uploadAd component data
      intro_image : '',
      title_1 : '',
      content_1 : '',


      loader : true


    }
  },


  components: {
    homeCarousal,
    homeCates,
    expolerAds,
    deliveryCompany,
    homeDetails,
    uploadAd,
    loginComponent,
    loader
    
  },

  methods:{
    async getHome(){
      await axios.get('home', {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{

        this.banners = res.data.data.banners ; 

        this.categories = res.data.data.categories ; 

        this.advertisements = res.data.data.advertisements ; 

        this.shipping_companies = res.data.data.shipping_companies ; 

        this.categories_to_filter = res.data.data.categories_to_filter ;

        this.sub_categories_to_filter = res.data.data.sub_categories_to_filter ; 

        this.cities = res.data.data.cities ; 

        this.nav_and_footer_data = res.data.data.nav_and_footer_data ; 

        this.intro_advertiser_image = res.data.data.intro_advertiser_image ; 

        this.intro_advertiserment_image = res.data.data.intro_advertiserment_image ; 

        this.intro_user_image = res.data.data.intro_user_image ; 

        this.title_2 = res.data.data.title_2 ; 

        this.content_2 = res.data.data.content_2 ; 

        this.users_num = res.data.data.users_num ; 

        this.advertisement_num = res.data.data.advertisement_num ; 

        this.advertisers_num = res.data.data.advertisers_num ; 

        this.intro_image = res.data.data.intro_image ; 

        this.title_1 = res.data.data.title_1 ; 

        this.content_1 = res.data.data.content_1 ; 


        this.loader = false


      } )
    }
  },
  mounted(){
    this.getHome()
  }
});
</script>
