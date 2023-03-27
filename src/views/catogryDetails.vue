<template>
  <!-- loader  -->
  <loader v-if="loader" />
  <!-- start slider  -->
  <sliderNew :images="images" />
  <!-- end slider  -->

  <!-- Start ads-detailes Section -->
  <div class="ads-detailes sec-padding mt-3">
    <div class="container">
      <div class="main-title">
        <h3 class="main-tit-text lg">{{ advertisement.static_text }}  {{  advertisement.name }} <span style="font-size:16px">({{ advertisement.price }} {{ advertisement.currency }})</span> </h3>
        <div class="ads-type">
          {{ advertisement.status_for_show }}
          <img :src="newImg" alt="" />
        </div>
      </div>

      <div class="terms">
        <p class="terms-text">
          {{ advertisement.details }}
        </p>

      </div>
    </div>
  </div>
  <!-- End ads-detailes Section -->

  <!-- Start ads-detailes Section -->
  <div class="ads-detailes pb-4">
    <div class="container">
      <div class="main-title">
        <h3 class="main-tit-text lg">مُضاف بواسطة</h3>
      </div>

      <div class="ads-detailes-info">
        <div class="">
          <router-link class="ads-det-num" :to="'/profileView/'+advertisement.advertiser_id">
              <img class="user-img" :src="advertisement.advertiser_image" alt="" />
              <span class="number"> {{ advertisement.advertiser_name }} </span>
          </router-link>
        </div>
        <div class="ads-det-num">
          <img :src="callImg" alt="" />
          <span class="number"> {{ advertisement.contact_method }} </span>
        </div>
      </div>
    </div>
  </div>
  <!-- End ads-detailes Section -->


  <!-- actions for active ads -->
  <div class="d-flex justify-content-center mt-2 mb-4" v-if="activation_status=='active'">
    <button class="main-btn red md up" data-bs-toggle="modal" data-bs-target="#deleteAds"> حذف الاعلان </button>
  </div>

    <!-- actions for finished ads -->
    <div class="d-flex justify-content-center mt-2 mb-4" v-if="activation_status=='finished'">
      <button class="main-btn md up" style="margin:0 30px" @click="$router.push(`/republishAdd`)"> اعادة نشر الاعلان </button>
      <button class="main-btn red md up" data-bs-toggle="modal" data-bs-target="#deleteAds"> حذف الاعلان </button>
    </div>


  <!-- remove ads  -->
  <div
    class="modal fade done"
    id="deleteAds"
    v-show="removeAd"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button
          type="button"
          class="close-model-btn"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </button>

        <div class="content-model-me">
          <div class="modal-header">
            <h2 class="section-title"> هل تود بالفعل حذف الإعلان </h2>
          </div>

          <div class="modal-body">
            <img :src="logOutImg" alt="" class="done-img" />
          </div>

          <div class="modal-footer">
            <button
              class="main-btn red md up"
              type="submit"
              :disabled="disabled"
              @click.prevent="removeAds()"
            >
              نعم
               <div class="spinner-border" role="status" v-if="disabled">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </button>
            <button
              class="main-btn md up"
              type="submit"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              لا
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


        <!-- removed done  -->
  
        <v-dialog
            v-model="dialog"
            width="auto"
            >


            <v-card>

                <div class="d-flex justify-content-end w-100">
                    <button type="button" class="close-model-btn" style="font-size:22px" @click="dialog=false">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </button>
                </div>
                <div class="content-model-me">
                  <div class="modal-header">
                    <h2 class="section-title">تم حذف الإعلان بنجاح</h2>
                  </div>

                  <div class="modal-body">
                    <img :src="doneGif" alt="" class="done-img" />
                  </div>

                  <div class="modal-footer">
                    <button
                      class="main-btn md up"
                      @click="$router.push('/advertisementsView')"
                    >
                      إعلاناتي
                    </button>
                  </div>
                </div>      


            </v-card>
        </v-dialog>
</template>

<script>
import { defineComponent } from "vue";
import sliderNew from "../components/adverses/sliderNew.vue";
import axios from 'axios'
import loader from '../components/Shared/pageLoader.vue'

export default defineComponent({
  name: "catogryDetails",
  data() {
    return {
      newImg: require("../assets/imgs/new.png"),
      personImg: require("../assets/imgs/user1.png"),
      callImg: require("../assets/imgs/telephone.png"),
      logOutImg: require("../assets/imgs/alert.gif"),
      doneGif: require("../assets/imgs/done.gif"),
      loader : true,
      advertisement : {},
      images : [],
      activation_status : '',
      disabled : false,
      dialog : false,
      removeAd : false,
      adID : null
    };
  },
  methods: {
    async getCategoryDetails(){
      await axios.get(`details-for-advertisement/${this.$route.params.id}`)
      .then( (res)=>{
        this.advertisement = res.data.data.advertisement;
        this.images = res.data.data.advertisement.images;

        this.activation_status = res.data.data.advertisement.activation_status

        this.adID = res.data.data.advertisement.id
        localStorage.setItem('adId',this.adID)

        this.loader = false
      } )
    },

    async removeAds(){
      await axios.delete(`delete-advertisement/${this.$route.params.id}`, {
          headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{

        this.disabled = true
        if( res.data.key == "success" ){

          this.$swal({
              icon: 'success',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,

          });

          this.removeAd = false
          document.querySelector('.modal-backdrop').style.display = "none"

          setTimeout(() => {
              this.dialog = true
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

  components: { sliderNew , loader},
  mounted(){
    this.getCategoryDetails()

    this.removeAd = true

    let id = this.$route.params.id
    let catsIds = localStorage.getItem('catsIdsAds');
      if( !catsIds.includes(id) ){
        this.$router.push({name:'notFoundView'})
      }
    

  },
  updated(){
    if( localStorage.getItem('currentAd') == 'true' ){
      this.getCategoryDetails()
    }
    // this.getCategoryDetails()
  }
});
</script>
<style>
a {
  text-decoration: none !important;
}
</style>
