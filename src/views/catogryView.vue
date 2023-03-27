<template>

  <!-- loader -->
  <loader v-if="loader" />
  <!-- Start advertisements Section -->
  <div class="explore-section main-padding">
    <div class="container">
      <div class="main-title media">
        <h3 class="main-tit-text">تصفح قسم {{ departmentName }}</h3>

        <div class="title-inputs">

          <form
            action=""
            class="search"
            data-bs-toggle="modal"
            data-bs-target="#filterModal"
          >
            <input type="text" placeholder="فلتر حسب" class="search-input" />
            <button type="button" class="search-btn">
              <img :src="filterImg" alt="" />
            </button>
          </form>
        </div>
      </div>

      <section v-if="catsAds.length>0">
        <div class="eplore-cards" v-if="showAds1">
        <div class="explore-card" v-for="(fav) in catsAds" :key="fav.id">
          <div class="card-container">
            <router-link
              :to="{ name: 'publicAds', params: { id: fav.id } }"
            ></router-link>
            <div class="explore-card-head">
              <img :src="fav.image" alt="" />
            </div>
            <div class="explore-card-body">
              <h3 class="ads-title">{{ fav.name }}</h3>
              <p class="ads-city">{{ fav.city_name }}</p>
              <span class="ads-price">{{ fav.price }} {{ fav.currency }} </span>
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

      <div  v-if="showAds2">
        <section class="eplore-cards" v-if="filteredAds.length>0" >
          <div class="explore-card" v-for="(card) in filteredAds" :key="card.id">
            <div class="card-container">
              <router-link :to="{ name: 'publicAds', params: { id: card.id } }"></router-link>
              <div class="explore-card-head">
                <img :src="card.image" alt="" />
              </div>
              <div class="explore-card-body">
                <h3 class="ads-title">{{ card.static_text }}  {{ card.name }}</h3>
                <p class="ads-city">{{ card.city_name }}</p>
                <span class="ads-price">{{ card.price }} {{ card.currency }} </span>
              </div>
            </div>
            <div class="explore-card-footer">
              <router-link :to="'/profileView/'+card.advertiser_id" class="profile">
                <img class="profile-img" :src="card.advertiser_image" alt="" />
                <span class="profile-name">{{ card.advertiser_name }} </span>
              </router-link>
              <div class="favorite-icon" @click="addHeart(card.id)">
                <font-awesome-icon v-if="card.fav_status==true" icon="fa-solid fa-heart" />
                <font-awesome-icon
                  v-if="card.fav_status==false"
                  icon="fa-regular fa-heart"
                />

              </div>
            </div>
          </div>

        </section>
        <section v-else>
          <v-alert
          type="info"
          class="noFound"
          >
           لا توجد إعلانات
          </v-alert>
        </section>
      </div>
      </section>

      <section v-else>
          <v-alert
          type="info"
          class="noFound"
          >
           لا توجد إعلانات
          </v-alert>
        </section>

      <!-- pagination -->
      <paginate
          v-model="currentPageP"
          :page-count="totalPagesP"
          :click-handler="page => pageClickHandler(page)"
          :prev-text="'السابق'"
          :next-text="'التالي'"
          :container-class="'pagination'"
          :page-class="'page-item'"    
          :no-li-surround="true"   
          v-if="catsAds.length>0"        
      >
      </paginate>


    </div>
  </div>
  <!-- End advertisements Section -->

  <!-- adsfilterModal -->
  <div
    class="modal fade filter-modal"
    id="filterModal"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="content-model-me">
          <form action="" class="modal-form">
            <div class="modal-header">
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
           
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-sub-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-sub"
                    type="button"
                    role="tab"
                    aria-controls="pills-sub"
                    aria-selected="true"
                  >
                    قسم فرعي
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-city-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-city"
                    type="button"
                    role="tab"
                    aria-controls="pills-city"
                    aria-selected="false"
                  >
                    المدينة
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-type-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-type"
                    type="button"
                    role="tab"
                    aria-controls="pills-type"
                    aria-selected="false"
                  >
                    النوع
                  </button>
                </li>
              </ul>
            </div>

            <div class="modal-body">
              <div class="tab-content" id="pills-tabContent">
            
                <!-- sub categories to filter  -->
                <div
                  class="tab-pane fade show active"
                  id="pills-sub"
                  role="tabpanel"
                  aria-labelledby="pills-sub-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-8 mx-auto">
                      <div class="check-boxs">
                        <div class="row gy-3">

                          <!-- single sub categories  -->
                          <div class="col-sm-4 col-6" v-for="sub_category in sub_categories_to_filter" :key="sub_category.id">
                            <div class="check">
                              <input type="checkbox" v-model="subCat" :value="sub_category.id" :name="'sub1'+sub_category.id" :id="'sub1'+sub_category.id" :checked="sub_category.status" />
                              <label :for="'sub1'+sub_category.id">{{ sub_category.name }}</label>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- cities  -->
                <div
                  class="tab-pane fade"
                  id="pills-city"
                  role="tabpanel"
                  aria-labelledby="pills-city-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-8 mx-auto">
                      <div class="check-boxs">
                        <div class="row gy-3">
                          
                          <!-- single city to filter  -->
                          <div class="col-sm-4 col-6" v-for="city in cities" :key="city.id">
                            <div class="check">
                              <input type="checkbox" :name="'city'+city.id" :value="city.id" v-model="citiesSelected" :id="'city'+city.id" :checked="city.status" />
                              <label :for="'city'+city.id"> {{city.name}} </label>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- status  -->
                <div
                  class="tab-pane fade"
                  id="pills-type"
                  role="tabpanel"
                  aria-labelledby="pills-type-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-8 mx-auto">
                      <div class="check-boxs">
                        <div class="row gy-3">
                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="new" value='"new"' v-model="selectedStatus" id="type1" />
                              <label for="type1">جديد</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="used"  value='"used"' v-model="selectedStatus" id="type2" />
                              <label for="type2">مستعمل</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div class="modal-footer">
              <div class="buttons-m">
                <button
                  class="main-btn dark md up"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  بحث
                </button>
                <button
                  class="main-btn transparent md up"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Paginate from 'vuejs-paginate-next';

import loader from '../components/Shared/pageLoader.vue'


import axios from 'axios';

export default defineComponent({
  name: "catogryView",
  data() {
    return {
      departmentName : '',
      filterImg: require("../assets/imgs/icons8-slider-50.png"),
      catsAds : [],
      currentPageP: 1,
      perPageP: 10,
      totalPagesP: 0,
      loader : true,
      adId : null,
      sub_categories_to_filter : [],
      cities : [],
      subCat : [],
      citiesSelected : [],
      selectedStatus : [],
      showAds1 : true,
      showAds2 : false,
      filteredAds : [],
      catsAdsIds : [],

    };
  },
  watch : {
    subCat(){

      this.adsFilter()

    },
    citiesSelected(){

      this.adsFilter()

    },
    selectedStatus(){

      this.adsFilter()

    }
  },
  created() {
        this.totalPagesP = Math.ceil(this.catsAds.length / this.perPageP)
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
            this.getCategoriesAds()
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
    // get data 
    async getCategoriesAds(){
      await axios.get(`category/${this.$route.params.id}/advertisements` , {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.catsAds = res.data.data.advertisements.data;
        this.adId = res.data.data.advertisements.data.id;


        this.totalPagesP = res.data.data.pagination.total_pages
        this.perPageP = res.data.data.pagination.per_page
        this.currentPageP = res.data.data.pagination.current_page

        this.loader = false


        for( let i = 0 ; i < this.catsAds.length ; i++ ){
          this.catsAdsIds.push(this.catsAds[i].id)
        }
        localStorage.setItem('catsAdsIds', this.catsAdsIds)


      } )
    },
    // pagination click 
    pageClickHandler(page) {
        this.currentPageP = page
        this.getCategoriesAds()
    },

    // checkboxes filter 
    async adsFilter(){
      await axios.get(`filter-advertisements/${this.$route.params.id}?sub_category_id=[${this.subCat}]&city_id=[${this.citiesSelected}]&status=[${this.selectedStatus}]&category_id=[${this.main}]` , {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
          this.filteredAds = res.data.data
          console.log( this.filteredAds )
          
          if(  this.subCat.length == 0 && this.citiesSelected.length == 0 && this.selectedStatus.length == 0 ){
              this.showAds1 = true;
              this.showAds2 = false;
          }else{
            this.showAds1 = false ;
            this.showAds2 = true;
          }       

      } )
    },


    // get sub categories and cities 
    async getHome(){
      await axios.get('home', {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.sub_categories_to_filter = res.data.data.sub_categories_to_filter ; 
        this.cities = res.data.data.cities ; 

      } )
    }

  },

  components: {
    Paginate,
    loader
  },

  mounted(){
    this.getCategoriesAds();
    this.getHome()

    this.departmentName = localStorage.getItem('departmentName')


    let id = this.$route.params.id
    let catsIds = localStorage.getItem('catsIds');
      if( !catsIds.includes(id) ){
        this.$router.push({name:'notFoundView'})
      }
    
  }
});
</script>
<style>
.pagination{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}
.page-link.active{
    background: #2abdc7 !important;
    border: 1px solid #2abdc7 !important;
}
a {
  text-decoration: none !important;
}
.noDataFound{
  width: 70%;
  margin: auto;
}
</style>
