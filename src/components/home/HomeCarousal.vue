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
        <swiper-slide class="home-item" v-for="slider in sliders" :key="slider"> 
          <img class="home-img" :src="slider.src" alt="" />
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="home-content">
                  <p class="home-desc">

                    {{ slider.desc }}
                  </p>
                  <a
                    href="#"
                    class="main-btn lg up"
                    data-bs-toggle="modal"
                    data-bs-target="#imgModal"
                    > {{ $t('common.uploadAds') }} </a
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

export default {
  data() {
    return {
        sliders :  [
            {
                desc : `
                                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن
                    يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                    العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
                    الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق

                `,
                        src: require("../../assets/imgs/home-bg-2.png"),

            },
            {
                desc : `
                                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن
                    يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                    العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
                    الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق

                `,
                        src: require("../../assets/imgs/home-bg-2.png"),

            }
        ]
    };
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