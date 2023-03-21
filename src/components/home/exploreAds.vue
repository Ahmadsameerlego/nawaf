<template>
  <div class="explore-section">
    <div class="container">
      <div class="main-title media">
        <h3 class="main-tit-text">تصفح الإعلانات</h3>

        <div class="title-inputs">

          <form
            action=""
            class="search"
            data-bs-toggle="modal"
            data-bs-target="#filterModal"
          >
            <input type="text" placeholder="فلتر حسب" class="search-input" />
            <button type="button" class="search-btn">
              <img :src="toggle" alt="" />
            </button>
          </form>
        </div>
      </div>

      <div class="eplore-cards" v-if="filteredAds.length>0">
        <div class="explore-card" v-for="(card) in filteredAds" :key="card.id">
          <div class="card-container">
            <a href="ads-detailes.html"></a>
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
            <a href="profile.html" class="profile">
              <img class="profile-img" :src="card.user" alt="" />
              <span class="profile-name">{{ card.advertiser_name }} </span>
            </a>
            <div class="favorite-icon" @click="addHeart(card.id)">
              <font-awesome-icon v-if="card.fav_status==true" icon="fa-solid fa-heart" />
              <font-awesome-icon
                v-if="card.fav_status==false"
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
          title="لا توجد اعلانات"
        ></v-alert>
      </div>
    </div>
  </div>

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
            <!-- modal header  -->
            <div class="modal-header">
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-main-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-main"
                    type="button"
                    role="tab"
                    aria-controls="pills-main"
                    aria-selected="true"
                  >
                    قسم رئيسيي
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
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

            <!-- modal body  -->
            <div class="modal-body">
              <div class="tab-content" id="pills-tabContent">

                <!-- categories to filter  -->
                <div
                  class="tab-pane fade show active"
                  id="pills-main"
                  role="tabpanel"
                  aria-labelledby="pills-main-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-8 mx-auto">
                      <div class="check-boxs">
                        <div class="row gy-3">

                          <!-- single category to filter -->
                          <div class="col-sm-4 col-6" v-for="category in categories_to_filter" :key="category.id">
                            <div class="check">
                              <input type="checkbox"  v-model="main" :value="category.id" :id="category.id"  :checked="category.status" />
                              <label :for="category.id"> {{ category.name }} </label>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- sub categories to filter  -->
                <div
                  class="tab-pane fade"
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
                              <input type="checkbox" name="new" value="new" v-model="selectedStatus" id="type1" />
                              <label for="type1">جديد</label>
                            </div>
                          </div>

                          <div class="col-sm-4 col-6">
                            <div class="check">
                              <input type="checkbox" name="reuse"  value="used" v-model="selectedStatus" id="type2" />
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
import axios from 'axios'
export default {
  data() {
    return {
      ads: require("../../assets/imgs/ads3.jpeg"),
      toggle: require("../../assets/imgs/icons8-slider-50.png"),
      adsCards: [
        {
          id: 1,
          hearted: false,
          adImage: require("../../assets/imgs/ads3.jpeg"),
          adsTittle: "اعلان عن لابتوب",
          address: "الرياض-السعودية",
          price: "2500 رس",
          cardOwner: "محمد احمد",
          user: require("../../assets/imgs/profile.jpg"),
        },
        {
          id: 2,
          hearted: false,
          adImage: require("../../assets/imgs/ads3.jpeg"),
          adsTittle: "اعلان عن لابتوب",
          address: "الرياض-السعودية",
          price: "2500 رس",
          cardOwner: "محمد احمد",
          user: require("../../assets/imgs/profile.jpg"),
        },
      ],
      main : [],
      subCat : [],
      citiesSelected : [],
      selectedStatus : [],
      catsIds : [],
      catId : 'category_id[]',
      filteredAds : []
    };
  },
  watch:{
    main(){
      console.log(this.main)

      this.adsFilter()
    },
    subCat(){
      console.log(this.subCat)

      this.adsFilter()

    },
    citiesSelected(){
      console.log(this.citiesSelected)

      this.adsFilter()

    },
    selectedStatus(){
      console.log(this.selectedStatus)

      this.adsFilter()

    }
  },
  props:{
    advertisements : Array,
    sub_categories_to_filter : Array,
    categories_to_filter : Array,
    cities : Array
  },
  methods: {
    async addHeart(i) {
      
      // console.log(this.hearted);
      const fd = new FormData();
      fd.append(`advertisement id`, i)
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

    async adsFilter(){
      await axios.get(`filter-advertisements?sub_category_id[]=${this.subCat}&city_id[]=${this.citiesSelected}&status[]=${this.selectedStatus}&category_id[]=${this.main}`)
      .then( (res)=>{
        console.log(res)
      } )
    }
  },
   mounted(){
    this.filteredAds = this.advertisements
   }
};
</script>

<style></style>
