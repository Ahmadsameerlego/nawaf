<template>
  <loader v-if="loader" />
  <!-- Start advertisements Section -->
  <div class="explore-section main-padding">
    <div class="container">
      <div class="eplore-cards" v-if="favs.length>0">
        <div class="explore-card" v-for="fav in favs"  :key="fav.id">
          <div class="card-container">
            <router-link :to="{ name: 'catogryDetails', params: { id: fav.id } }"></router-link>
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

      <!-- not found  -->
      <div class="noDataFound" v-else>
        <v-alert
          color="info"
          icon="$info"
          title="لا توجد عناصر مفضلة الى الان"
        ></v-alert>
      </div>

      <!-- pagination -->
      <paginate
          v-model="currentPageP"
          :page-count="totalPagesP"
          :click-handler="page => pageClickHandler(page)"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"    
          :no-li-surround="true"   
          v-if="favs.length>0"        
      >
      </paginate>
    </div>
  </div>
  <!-- End advertisements Section -->
</template>

<script>
import { defineComponent } from "vue";
import loader from '../components/Shared/pageLoader.vue'
import axios from 'axios'
import Paginate from 'vuejs-paginate-next';


export default defineComponent({
  name: "favView",
  data() {
    return {
      loader : true,
      favs : [],
      currentPageP: 1,
      perPageP: 10,
      totalPagesP: 0,
    };
  },
  created() {
        this.totalPagesP = Math.ceil(this.favs.length / this.perPageP)
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
            location.reload()
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
    async getFavs(){
      await axios.get('show-favourites', {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.favs = res.data.data.favourites.data;
        
        this.totalPagesP = res.data.data.pagination.total_pages
        this.perPageP = res.data.data.pagination.per_page
        this.currentPageP = res.data.data.pagination.current_page

        this.loader = false
      } )
    },

    pageClickHandler(page) {
        this.currentPageP = page
        this.getFavs()
    },
  },


  components: {
    loader,
    Paginate
  },

  mounted(){
    this.getFavs()
  }
});
</script>
<style>
a {
  text-decoration: none !important;
}
</style>
