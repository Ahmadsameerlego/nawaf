<template>
  <loader v-if="loader" />
   <!-- Start User Info -->
  <div class="user-info sec-padding">
    <div class="container">
      <div class="user-con">
        <img :src="advertiserImage" alt="" class="user-img" />
        <span class="user-name"> {{ advertiserName }} </span>
      </div>
    </div>
  </div>
  <!-- End User Info -->

  <!-- Start advertisements Section -->
  <div class="explore-section">
    <div class="container">
      <div class="main-title">
        <h3 class="main-tit-text lg">اعلاناته</h3>
        <router-link to="/advertisementsView" class="all-anchor">عرض الكل</router-link>
      </div>

      <div class="eplore-cards" v-if="ads.length>0">
        <div class="explore-card" v-for="(fav) in ads" :key="fav.id">
          <div class="card-container">
            <router-link
              :to="{ name: 'catogryDetails', params: { id: fav.id } }"
            ></router-link>
            <div class="explore-card-head">
              <img :src="fav.image" alt="" />
            </div>
            <div class="explore-card-body">
              <h3 class="ads-title">{{ fav.name }}</h3>
              <p class="ads-city">{{ fav.city_name }}</p>
              <span class="ads-price">{{ fav.price }} {{ fav.currency }}</span>
            </div>
          </div>
          <div class="explore-card-footer">
            <router-link :to="{ name: 'profileView' , params: { id: fav.advertiser_id } }" class="profile">
              <img class="profile-img" :src="fav.advertiser_image" alt="" />
              <span class="profile-name">{{ fav.advertiser_name }}</span>
            </router-link>
            <div class="favorite-icon" ref="favoriteicon" @click="addHeart(fav.id)">
              <font-awesome-icon v-if="fav.fav_status==true" icon="fa-solid fa-heart" />
              <font-awesome-icon
                v-if="fav.fav_status==false"
                icon="fa-regular fa-heart"
              />

            </div>
          </div>
        </div>
      </div>

      <div class="dander-noti" v-else>لا توجد إعلانات</div>

        <!-- rates pagination -->
        <paginate
            v-model="currentPageP"
            :page-count="totalPagesP"
            :click-handler="page => pageClickHandler1(page1)"
            :prev-text="'السابق'"
            :next-text="'التالي'"
            :container-class="'pagination'"
            :page-class="'page-item'"    
            :no-li-surround="true"   
            v-if="ads.length>0"        
        >
        </paginate>

    </div>
  </div>
  <!-- End advertisements Section -->

  <!-- Start Rating Sections -->
  <div class="add-rating-sec main-padding">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6">
          <div class="ratings height-full">
            <div class="main-title">
              <h3 class="main-tit-text lg">تقييماته</h3>
            </div>
            <!-- rates items  -->

            <div class="rating-cards" v-if="rates.length>0">
              <div class="rating-card" v-for="rate in rates" :key="rate.id">
                <img :src="rate.image" class="rate-img" alt="" />
                <div class="rate-info">
                  <p class="rate-text">
                    {{ rate.comment }}
                  </p>
                  <div class="rate-foot">
                    <span class="user-name">{{ rate.name }}</span>
                    <v-rating
                      half-increments
                      readonly="true"
                      color="orange"
                      length="5"
                      size="58"
                      marginRight="2"
                      v-model="rate.num_of_stars"
                    ></v-rating>
                  </div>
                </div>
              </div>
            </div>

            <div class="dander-noti" v-else>لا توجد تقييمات</div>

              <!-- rates pagination -->
              <paginate
                  v-model="currentPageP"
                  :page-count="totalPagesP"
                  :click-handler="page => pageClickHandler(page)"
                  :prev-text="'السابق'"
                  :next-text="'التالي'"
                  :container-class="'pagination'"
                  :page-class="'page-item'"    
                  :no-li-surround="true"   
                  v-if="rates.length>0"        
              >
              </paginate>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="add-rating height-full">
            <div class="main-title">
              <h3 class="main-tit-text lg">اترك تقييمك</h3>
            </div>

            <div class="rating-form section-style">
              <form ref="rateForm" @submit.prevent="rateUser()">
                <div class="inputs-container mb-4">
                  <div class="input-g">
                    <div class="main-input">
                      <textarea
                        class="input-me text-area"
                        placeholder="اكتب هنا"
                        name="comment"
                        v-model="comment"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <v-rating
                  color="orange"
                  length="5"
                  size="54"
                  name="num_of_stars"
                  v-model="num_of_stars"
                ></v-rating>
                <button type="submit" :disabled="disabled" class="main-btn md up mx-auto">
                  إرسال
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Rating Sections -->
</template>

<script>
import { defineComponent } from "vue";
import Paginate from 'vuejs-paginate-next';

import loader from '../components/Shared/pageLoader.vue'

import axios from 'axios'

export default defineComponent({
  name: "profileView",

  data() {
    return {
      loader : true, 
      num_of_stars: "",
      uuimg: require("../assets/imgs/ads2.png"),
      rates:[],
      ads : [],
      ratesPagination:{},
      adsPagination : {},
      // rates pagination data
      currentPageP: 1,
      perPageP: 10,
      totalPagesP: 0,
      // ads pagination data
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
      disabled : false,
      advertiserName : '',
      advertiserImage : null,
      comment : ''

    };
  },
  created() {
        this.totalPagesP = Math.ceil(this.rates.length / this.perPageP)
        this.totalPages = Math.ceil(this.ads.length / this.perPage)
  },
  mounted(){
    this.getUserAds()
  },
  methods: {
    async addHeart(adId) {
      
      // console.log(this.hearted);
      const fd = new FormData();
      fd.append(`advertisement id`, adId) 
      await axios.post(`favourite-advertisement`, fd , {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.data.key == "success" ){
          this.$swal({
              icon: 'success',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,

          });

          setTimeout(() => {
              this.getUserAds()
          }, 2000);

        }else{
          this.$swal({
              icon: 'error',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,

          });        
        }
      } )
    },
    // get ads 
    async getUserAds(){
      await axios.get(`user/${this.$route.params.id}/advertisements` , {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.ads = res.data.data.advertisements.data
        this.rates = res.data.data.rates.data

        // get advertiser name and image
        this.advertiserName = res.data.data.advertisements.data[0].advertiser_name
        this.advertiserImage = res.data.data.advertisements.data[0].advertiser_image
        // rates pagination data
        this.totalPagesP = res.data.data.pagination_rates.total_pages
        this.perPageP = res.data.data.pagination_rates.per_page
        this.currentPageP = res.data.data.pagination_rates.current_page
        // ads pagination data
        this.totalPages = res.data.data.pagination.total_pages
        this.perPage = res.data.data.pagination.per_page
        this.currentPage = res.data.data.pagination.current_page

        this.loader = false
      } )
    },

    pageClickHandler(page) {
        this.currentPageP = page
        this.getUserAds()
    },

    pageClickHandler1(page1) {
        this.currentPage = page1
        this.getUserAds()
    },
    // rate user 
    async rateUser(){
        this.disabled = true

        const fd = new FormData(this.$refs.rateForm)
        fd.append('advertiser_id', this.$route.params.id)

      await axios.post('rate', fd, {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.data.key == "success" ){
          this.$swal({
              icon: 'success',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,

          });

          // update data 
          setTimeout(() => {
              this.getUserAds()

              this.comment = '';
              this.num_of_stars = '';
          }, 2000);
        }else{
          this.$swal({
              icon: 'error',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,

          });
        }
        this.disabled = false
      } )
    }
  },

  components: {
    Paginate,
    loader
  },
});
</script>
<style>
.add-rating .v-rating {
  direction: ltr;
  justify-content: center;
  width: 100%;
}
.add-rating .v-rating__wrapper {
  /* width: 50px; */
}
.add-rating .v-rating__item .v-btn .v-icon {
  font-size: 35px;
}
</style>
