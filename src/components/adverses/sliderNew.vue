<template>
  <section class="catogry-section">
    <div class="catogry-carousel owl-carousel">
      <div class="pb-4 pt-5">
        <swiper
          :pagination="pagination"
          :modules="modules"
          :breakpoints="{
            '800': {
              slidesPerView: 2,
              spaceBetween: 5,
            },
          }"
          :slides-per-view="1"
          :centeredSlides="true"
          :space-between="10"
          :navigation="true"
          class="mySwiper"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          :loop="true"
        >
          <swiper-slide
            class="home-item"
            v-for="slider in sliders"
            :key="slider"
          >
            <img class="home-img" :src="slider.src" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

export default {
  data() {
    return {
      sliders: [
        {
          src: require("../../assets/imgs/ads5.webp"),
        },
        {
          src: require("../../assets/imgs/ads5.webp"),
        },
        {
          src: require("../../assets/imgs/ads5.webp"),
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
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

<style >
a {
  text-decoration: none !important    ;
}
.catogry-section .swiper {
  overflow: visible;
}
.catogry-section .swiper-horizontal > .swiper-pagination-bullets,
.catogry-section .swiper-pagination-bullets.swiper-pagination-horizontal,
.catogry-section .swiper-pagination-custom,
.catogry-section .swiper-pagination-fraction {
  bottom: -32px;
}
.swiper-pagination-bullet {
  transition: all 0.3s ease-in-out;
}
.catogry-section .home-item .home-img {
  width: 100%;
  height: 280px;
  border-radius: 25px;
  -o-object-fit: cover;
  object-fit: cover;
}
.catogry-section .swiper-slide {
  transform: scale(0.9);
  transition: all 0.4s ease-in-out;
}
.catogry-section .swiper-slide-prev {
  transform: scale(0.9);
  transition: all 0.4s ease-in-out;
}

.catogry-section .swiper-slide.swiper-slide-active {
  transform: scale(1) !important;
}
@media screen and (max-width: 900px) {
  .catogry-carousel {
    padding: 0px 8px;
  }
}
</style>
