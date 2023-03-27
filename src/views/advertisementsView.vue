<template>
  <!-- loader  -->
  <loader v-if="loader" />
  <!-- Start advertisements Section -->
  <div class="explore-section main-padding">
    <div class="container">
      <h2 class="section-title">إعلاناتي</h2>

      <div class="tabs-container-m">
        <div
          class="tab-m"
          :class="{ 'active-tab': showtap1 }"
          @click="showMe()"
        >
          اعلانات نشطة
        </div>
        <div
          class="tab-m"
          @click="showMe2()"
          :class="{ 'active-tab': showtap2 }"
        >
          إعلانات منتهية
        </div>
      </div>

      <!-- اعلانات نشطة -->
      <section v-if="showtap1">
        <div class="" >

            <div class="eplore-cards" v-if="activeAds.length>0">
                <div class="explore-card" v-for="(fav) in activeAds" :key="fav.id">
                <div class="card-container">
                  <router-link
                    :to="{ name: 'catogryDetails', params: { id: fav.id } }"
                  ></router-link>
                  <div class="explore-card-head">
                    <img :src="fav.image" alt="" />
                  </div>
                  <div class="explore-card-body">
                    <h3 class="ads-title">{{ fav.static_text }} {{ fav.name }}</h3>
                    <p class="ads-city">{{ fav.city_name }}</p>
                    <span class="ads-price">{{ fav.price }} {{ fav.currency }}</span>
                  </div>
                </div>
                <div class="explore-card-footer">
                  <router-link :to="'/profileView/'+fav.advertiser_id" class="profile">
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

            <div class="noDataFound" v-else>
              <v-alert
                color="info"
                icon="$info"
                title="لا توجد اعلانات نشطة"
              ></v-alert>
            </div>
        
        </div>

        
        <!-- pagination  -->
        <paginate
            v-model="currentPageP"
            :page-count="totalPagesP"
            :click-handler="page => pageClickHandler(page)"
            :prev-text="'السابق'"
            :next-text="'التالي'"
            :container-class="'pagination'"
            :page-class="'page-item'"    
            :no-li-surround="true"   
            v-if="activeAds.length>0"        
        >
        </paginate>
      </section>



      <!-- إعلانات منتهية -->
      <section  v-if="showtap2">
        <div class="">
          <div class="eplore-cards" v-if="finishedAds.length>0">
              <div class="explore-card" v-for="fav in finishedAds" :key="fav.id">
              <div class="card-container">
                <router-link
                  :to="{ name: 'catogryDetails', params: { id: fav.id } }"
                ></router-link>
                <div class="explore-card-head">
                  <img :src="fav.image" alt="" />
                </div>
                <div class="explore-card-body">
                  <h3 class="ads-title">{{ fav.static_text }} {{ fav.name }}</h3>
                  <p class="ads-city">{{ fav.city_name }}</p>
                  <span class="ads-price">{{ fav.price }} {{ fav.currency }}</span>
                </div>
              </div>
              <div class="explore-card-footer">
                <router-link :to="'/profileView/'+fav.advertiser_id" class="profile">
                  <img class="profile-img" :src="fav.advertiser_image" alt="" />
                  <span class="profile-name">{{ fav.advertiser_name }}</span>
                </router-link>
                <div class="favorite-icon" ref="favoriteicon" @click="addHeart2(fav.id)">
                  <font-awesome-icon v-if="fav.fav_status==true" icon="fa-solid fa-heart" />
                  <font-awesome-icon
                    v-if="fav.fav_status==false"
                    icon="fa-regular fa-heart"
                  />
                </div>
              </div>
              </div>
          </div>

          <div class="noDataFound" v-else>
            <v-alert
              color="info"
              icon="$info"
              title="لا توجد اعلانات منتهية"
            ></v-alert>
          </div>


        </div>

        <!-- pagination  -->
          <paginate
            v-model="currentPage"
            :page-count="totalPages"
            :click-handler="page => pageClickHandler2(page)"
            :prev-text="'السابق'"
            :next-text="'التالي'"
            :container-class="'pagination'"
            :page-class="'page-item'"    
            :no-li-surround="true"   
            v-if="finishedAds.length>0"        
        >
          </paginate>
      </section>
    </div>
  </div>
  <!-- End advertisements Section -->
  <!-- Start advertisements Section -->
  <div class="explore-section main-padding">
    <div class="container"></div>
  </div>
  <!-- End advertisements Section -->
</template>

<script>
import { defineComponent } from "vue";
import axios from 'axios';
import loader from '../components/Shared/pageLoader.vue';
import Paginate from 'vuejs-paginate-next';


export default defineComponent({
  name: "advertisementsView",
  data() {
    return {
      showtap1: true,
      showtap2: false,
      activeAds : [],
      finishedAds : [],
      loader : true,

      // active pagination 
      currentPageP: 1,
      perPageP: 10,
      totalPagesP: 0,

      // finished pagination 
      currentPage: 1,
      perPage: 10,
      totalPages: 0,

      catsAdsIds : [],
      catsAdsIds2 : [],



    };
  },
  created() {
        this.totalPagesP = Math.ceil(this.activeAds.length / this.perPageP)


        this.totalPages = Math.ceil(this.finishedAds.length / this.perPage)

  },
  methods: {
    async addHeart(adId) {

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
            this.getActiveAds()
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
    async addHeart2(adID) {
      const fd = new FormData();
      fd.append(`advertisement id`, adID)
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
            this.getFinishedAds()
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
    showMe() {
      this.showtap1 = true;
      this.showtap2 = false;
    },
    showMe2() {
      this.showtap2 = true;
      this.showtap1 = false;
    },

    // get active ads 
    async getActiveAds(){
      await axios.get('active-advertisement', {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{
        this.activeAds = res.data.data.active_advertisement.data
        this.totalPagesP = res.data.data.pagination.total_pages
        this.perPageP = res.data.data.pagination.per_page
        this.currentPageP = res.data.data.pagination.current_page

        this.loader = false

        for( let i = 0 ; i < this.activeAds.length ; i++ ){
          this.catsAdsIds.push(this.activeAds[i].id)
        }

      } )
    },

    pageClickHandler(page) {
        this.currentPageP = page
        this.getActiveAds()
    },
    // get finished ads 
    async getFinishedAds(){
      await axios.get('finished-advertisement', {
          headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{
        this.finishedAds = res.data.data.active_advertisement.data

        this.totalPages = res.data.data.pagination.total_pages
        this.perPage = res.data.data.pagination.per_page
        this.currentPage = res.data.data.pagination.current_page

        for( let i = 0 ; i < this.finishedAds.length ; i++ ){
          this.catsAdsIds2.push(this.finishedAds[i].id)
        }
        localStorage.setItem('catsIdsAds', this.catsAdsIds.concat(this.catsAdsIds2))
      } )
    },


    pageClickHandle2(page) {
        this.currentPage = page
        this.getFinishedAds()
    },
  },

  components: {
    loader,
    Paginate
  },
  mounted(){
    this.getActiveAds();
    this.getFinishedAds()
  }
});
</script>
<style scoped>
a {
  text-decoration: none !important;
}
.noDataFound{
  width: 300px;
}
</style>
