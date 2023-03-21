<template>

  <!-- loader -->
  <loader v-if="loader" />
  <!-- Start advertisements Section -->
  <div class="explore-section main-padding">
    <div class="container">
      <div class="main-title media">
        <h3 class="main-tit-text">تصفح قسم الالكترونيات</h3>

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

      <div class="eplore-cards" v-if="catsAds.length > 0">
        <div class="explore-card" v-for="(fav, i) in catsAds" :key="fav.id">
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
            <div class="favorite-icon" ref="favoriteicon" @click="addHeart(i)">
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
          title="لا توجد اقسام لهذا المتجر"
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
                    aria-selected="false"
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
                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="sub1" id="sub1" />
                              <label for="sub1">الكترونيات</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="sub2" id="sub2" />
                              <label for="sub2">أزياء</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="sub3" id="sub3" />
                              <label for="sub3">شنط</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="sub4" id="sub4" />
                              <label for="sub4">ألعاب</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="sub5" id="sub5" />
                              <label for="sub5">مطاعم</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="sub6" id="sub6" />
                              <label for="sub6">فنادق</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="sub7" id="sub7" />
                              <label for="sub7">اكسسوارات</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="city1" id="city1" />
                              <label for="city1">الرياض</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="city2" id="city2" />
                              <label for="city2">الدمام</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="city3" id="city3" />
                              <label for="city3">جدة</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="city4" id="city4" />
                              <label for="city4">جدة</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="city5" id="city5" />
                              <label for="city5">الرياض</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="city6" id="city6" />
                              <label for="city6">الدمام</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="city7" id="city7" />
                              <label for="city7">الرياض</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                              <input type="checkbox" name="type1" id="type1" />
                              <label for="type1">جديد</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="type2" id="type2" />
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
                  type="submit"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  بحث
                </button>
                <button
                  class="main-btn transparent md up"
                  type="submit"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  حذف
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
      filterImg: require("../assets/imgs/icons8-slider-50.png"),
      catsAds : [],
      currentPageP: 1,
      perPageP: 10,
      totalPagesP: 0,
      loader : true,
      adId : null

    };
  },
  created() {
        this.totalPagesP = Math.ceil(this.catsAds.length / this.perPageP)
  },
  methods: {
    async addHeart() {
      
      // console.log(this.hearted);
      const fd = new FormData();
      fd.append(`advertisement id`, this.$route.params.id)
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

    async getCategoriesAds(){
      await axios.get(`category/${this.$route.params.id}/advertisements` , {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.catsAds = res.data.data.advertisements.data;
        this.adId = res.data.data.advertisements.id

        this.totalPagesP = res.data.data.pagination.total_pages
        this.perPageP = res.data.data.pagination.per_page
        this.currentPageP = res.data.data.pagination.current_page

        this.loader = false

      } )
    },

    pageClickHandler(page) {
        this.currentPageP = page
        this.getCategoriesAds()
    },
  },

  components: {
    Paginate,
    loader
  },

  mounted(){
    this.getCategoriesAds()
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
