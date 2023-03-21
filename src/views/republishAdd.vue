<template>
  <!-- Start Add Advertisements Section -->
  <div class="add-ads main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="add-form section-style sec-padding">
            <div class="row">
              <div class="col-lg-8 col-md-10 col-11 mx-auto">
                <form ref="uploadAdForm" @submit.prevent="repostAd()" enctype="multipart/form-data">
                  <h2 class="section-title">إعادة نشر الإعلان</h2>
                  <div class="inputs-container">
                    <div class="upload-ads-img">
                      <span class="ads-img-text">
                        ارفع صور الإعلان
                        <span class="ads-text">بحد اقصى 6 صور</span>
                      </span>
                      <div class="upload-img-container">
                        <div class="img-upload-show">
                          <div
                            class="edit-box"
                            v-for="imgUp,i in images"
                            :key="imgUp.id"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              @change="onFileChange($event , i)"
                              name="image[]"
                              :id="'imgUpload' + i"
                              class="hidden-input img-edit-input"
                            />
                            <label
                              :for="'imgUpload' + i"
                              class="edit-img"
                            >
                              <img
                                :src="imgUp.images"
                                alt=""
                                class="edited-img"
                                :class="{ wid: uploaded }"
                              />
                              <span class="edit-overlay">
                                <img :src="edit" alt="" />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> اسم الإعلان </label>
                      <div class="main-input">
                        <input
                          type="text"
                          class="input-me"
                          v-model="name"
                          name="name"
                          placeholder="أدخل اسم الإعلان"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> سعر الإعلان </label>
                      <div class="main-input">
                        <input
                          type="number"
                          class="input-me"
                          placeholder="أدخل سعر الإعلان"
                          v-model="price"
                          name="price"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> مدة الإعلان </label>
                      <div class="main-input">
                        <input
                          type="text"
                          class="input-me"
                          v-model="duration"
                          name="duration"
                          placeholder="أدخل مدة عرض الإعلان"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> القسم الرئيسي </label>
                      <div class="main-input">
                        <select name="category_id" v-model="category_id" @change="getCatId()" id="" class="input-me select">
                          <option value="" selected hidden> {{ selectedCat }} </option>
                          <option :value="cat.id" v-for="cat in categories" :key="cat.id"> {{ cat.name  }} </option>
                        </select>
                        <!-- <i class="fa-solid fa-angle-down main-icon"></i> -->
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> القسم الفرعي </label>
                      <div class="main-input">
                        <select name="sub_category_id" v-model="sub_category_id" id="" class="input-me select">
                          <option value="" selected hidden >
                            {{ selectedSubCat }}
                          </option>
                          <option :value="subCat.id" v-for="subCat in subCategories" :key="subCat.id"> {{ subCat.name }} </option>
                        </select>
                        <!-- <i class="fa-solid fa-angle-down main-icon"></i> -->
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> المدينة </label>
                      <div class="main-input">

                        <div class="position-relative w-100">
                            <input type="text" v-model="regionQuery"  name="query" placeholder="اختر المدينة" class="form-control select input-me" @input="getCities()">
                        </div>
                        <i class="fa-solid fa-angle-down main-icon"></i>


                        <div v-if="showList1" style="position:absolute;width:100%;height:200px;overflow-y:auto;top:50px;z-index:999">
                          <ul class="list-group" style="z-index:9999" v-if="filteredRegions.length>0">
                              <li class="list-group-item" v-for="(item,index) in filteredRegions" :key="item.id" >
                                      <span @click="setNewValueForRegion(item.name, item.id)" style="cursor:pointer" >
                                          {{index+1}}.{{item.name}}
                                      </span>
                              </li>
                          </ul>
                          <ul class="list-group" v-else>
                              <li class="list-group-item"> لا تتوفر بيانات</li>
                          </ul>
                        </div>

                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> تفاصيل الإعلان </label>
                      <div class="main-input">
                        <textarea
                          class="input-me text-area"
                          placeholder="اكتب تفاصيل الإعلان"
                          v-model="details"
                          name="details"
                        ></textarea>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> وسيلة اتصال </label>
                      <div class="main-input">
                        <input
                          type="text"
                          class="input-me"
                          placeholder="أدخل رقم الجوال أو البريد الالكتروني"
                          v-model="contact_method"
                          name="contact_method"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> حالة المنتج </label>
                      <div class="radio-boxs">
                        <div class="box">
                          <input type="radio" name="status" v-model="status" value="new" id="da3ef" :checked="newAd" />
                          <label for="da3ef">جديد</label>
                        </div>
                        <div class="box">
                          <input type="radio" name="status" v-model="status" value="used" id="maqbool"  :checked="reuseAd" />
                          <label for="maqbool">مستعمل</label>
                        </div>
                      </div>
                    </div>

                    <div class="input-g">
                      <button type="submit" class="main-btn md up mx-auto"  :disabled="disabled" >
                        استمرار
                        <div class="spinner-border" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add Advertisements Section -->
</template>

<script>
import { defineComponent } from "vue";

import axios from 'axios'

export default defineComponent({
  name: "republishAdd",
  data() {
    return {
      subID : null,
      edit: require("../assets/imgs/edit.png"),

      advertisement : {},
      images : [],

      reuseAd : false , 
      newAd : false ,
      contact_method : '',
      details : '',
      duration : '',
      price : '',
      name : '',
      categories : [],
      sub_categories : [],
      cities : [],
      selectedCat : '',
      selectedSubCat : '',
      selectedCity : '',
      regionQuery : null,

      city_id : '',
      upImgs : [],
      disabled : false,
      category_id : '',
      sub_category_id : '',

      subCategories : [],
      catSeletedId : null,
      subCatId : null,
      uploadedImages : []
    };
  },
  computed : {
        filteredRegions() {
            return this.cities.filter(region => {
                return region.name.toLowerCase().includes(this.regionQuery.toLowerCase())
            })
        },
  },
  methods: {
    onFileChange(event , i) {
      const file = event.target.files[0];
      console.log(event.target.files[0]);
      this.images[i].images = URL.createObjectURL(file);
      this.uploadedImages =this.images[i].images
      this.uploaded = true;
    },


    async getRepostAds(){
      await axios.get(`repost-advertisement/${localStorage.getItem('adId')}/repost` , {
          headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{
        this.advertisement = res.data.data.advertisement

        this.images = res.data.data.advertisement.images;

        this.name = res.data.data.advertisement.name
        this.price = res.data.data.advertisement.price
        this.details = res.data.data.advertisement.details
        this.duration = res.data.data.advertisement.duration
        this.contact_method = res.data.data.advertisement.contact_method
        // this.duration = res.data.data.advertisement.duration

        if( res.data.data.advertisement.status_for_use == "new" ){
          this.newAd = true
        }else if( res.data.data.advertisement.status_for_use == "used" ){
          this.reuseAd = true
        }


        // get categories 
        this.categories = res.data.data.advertisement.categories 
        // get sub category 
        this.sub_categories = res.data.data.advertisement.sub_categories
        // get city 
        this.cities = res.data.data.advertisement.cities ;

        // selected cat 
        let selectedCat = this.categories.filter( cat => cat.status == true );
        this.selectedCat = selectedCat[0].name;
        this.category_id = selectedCat[0].id

        // selected sub cat 
        let subCat = this.sub_categories.filter( sub_cat => sub_cat.status == true )
        this.selectedSubCat = subCat[0].name;
        this.subID = subCat[0].id;



        // selected city 
        let city = this.cities.filter( cit => cit.status == true )
        this.regionQuery = city[0].name

        this.city_id = city[0].id
      } )
    },

    // get subCategories 
    async getCatId(){
      console.log(this.category_id)
      await axios.get(`categories/${this.category_id}`)
      .then( (res)=>{
        this.subCategories = res.data.data
      } )
    },
    // repost ad 
    async repostAd(){
        this.disabled = true
        const fd = new FormData( this.$refs.uploadAdForm );
        fd.append('city_id', this.city_id)
        fd.append('id',localStorage.getItem('adId'))
        if( this.sub_category_id == '' )[
          fd.append('sub_category_id', this.subID)
        ]

        // for (var i = 0; i < this.images.length; i++) {
        //     this.imags = this.images[i]
        // }
          // fd.append('image[]' ,this.uploadedImages )
          // console.log(this.imags)

      await axios.post('repost', fd ,{
          headers : {
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
    },

    setNewValueForRegion(value1, id){
        this.regionQuery = value1;
        this.city_id = id
        if( this.regionQuery == value1 ){
            this.showList1 = false
        }
        // console.log(this.regionQuery)

        // this.getStores()

    },

    async getCities(){
      this.showList1 = true
    }
  },
  components: {},
  mounted(){
    this.getRepostAds()

    // for( let i = 0 ; i < this.categories.length ; i++ ){

    // }
  }
});
</script>
<style>
.categories-con .categories-card {
  text-decoration: none;
  color: #262626;
}
</style>
