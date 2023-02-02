<template>
  <div class="home-categories main-padding">
    <div class="container">
      <div class="main-title">
        <h3 class="main-tit-text"> {{ $t('cats.browse') }} </h3>
        <a href="categories.html" class="all-anchor"> {{ $t('cats.all') }} </a>
      </div>

      <div class="categories-carousel owl-carousel">
        <swiper
          :slidesPerView="8"
          :spaceBetween="100"
          :slidesPerGroup="1"
          :loop="true"
          class="mySwiper"
            :autoplay="{
                delay: 3500,
                disableOnInteraction: false,
            }"
            :modules="modules"

        >

          <swiper-slide v-for="cat in catsImages" :key="cat">
            
            <router-link :to="'/catogryView/'+cat.id" class="categories-item">
              <div class="img-style-con">
                <img
                  class="cat-img"
                  :src="cat.src"
                  alt=""
                />
              </div>
              <span class="catego-name"> {{ cat.name }} </span>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

// import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper";

export default {
    data(){
        return{
            catsImages : [
                {   id:1,
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    id : 2,
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
                {
                    src : require('../../assets/imgs/categories-1.png'),
                    name : 'الكترونيات'
                },
            ]
        }
    },
    components:{
        Swiper,
        SwiperSlide,

    },
    setup() {
        return {
            modules : [Autoplay]
        };
  },

};
</script>

<style scoped>
.swiper-pagination{
    display: none !important;
}
.all-anchor{
    text-decoration: underline !important;
}
</style>