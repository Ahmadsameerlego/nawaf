<template>
  <section class="home-section">
    <div class="home-carousel owl-carousel">
    <div class="">

        <swiper
            :pagination="pagination" 
            :modules="modules" 
                :navigation="true"
            class="mySwiper"      
            :autoplay="{
                delay: 3500,
                disableOnInteraction: false,
            }"
            :loop="true"

        >
        <swiper-slide class="home-item" v-for="slider in banners" :key="slider.id"> 
          <img class="home-img" :src="slider.image" alt="" />
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="home-content">
                  <p class="home-desc">

                    {{ slider.details }}
                  </p>
                  <a
                    href="#"
                    class="main-btn lg up"
                    data-bs-toggle="modal"
                    data-bs-target="#imgModal"
                    > {{ baner_text }} </a
                  >
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>



        
      </swiper>


    </div>
  </div>

  
  </section>

    <addAdsPanner />

</template>

<script>
import {  Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// import required modules
import { Autoplay ,Pagination } from "swiper";

// import add advertise panner 
import addAdsPanner from '../ads/addAdsPanner.vue'
import axios from 'axios';
export default {
  data() {
    return {
      baner_text : ''  
    };
  },
  methods:{
    async getHomeLogo(){
      await axios.get('home' , {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.baner_text = res.data.data.baner_text ;

      } )
      .catch( (err)=>{
        console.error(err)
      } )
    },
  },
  props : {
    banners : Array
  },
  mounted(){
    this.getHomeLogo();
  },
  components: {
    Swiper,
    SwiperSlide,
    addAdsPanner
  },
  setup() {
        return {
        pagination: {
            clickable: true,
        },

        modules: [Pagination, Autoplay],
    };

  },
};
</script>

<style> 
a{
    text-decoration: none !important    ;
}
</style>