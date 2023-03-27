<template>
  <loader v-if="loader" />
  <div class="add-ads main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="add-form section-style sec-padding">
            <div class="row">
              <div class="col-lg-8 col-md-10 col-11 mx-auto">

                <!-- form  -->
                <form ref="uploadAdForm" enctype="multipart/form-data">

                  <h2 class="section-title">ارفع إعلانك</h2>
                  <div class="inputs-container">
                    <div class="upload-ads-img">
                      <span class="ads-img-text">
                        ارفع صور الإعلان
                        <span class="upload-text">بحد اقصى 6 صور</span>
                      </span>
                      <div class="upload-img-container">
                        <div class="upload-img">
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            id="imgUpload"
                            class="hidden-input places-imgs-input"
                            @change="uploadAdImages($event.target)"
                          />
                          <div class="img-upload-show" >
                            <label for="imgUpload" class="label-img" >
                              <img  :src="camImage" alt="" v-bind:ref="'image' +parseInt( key )" />
                            </label>
                          </div>
                        </div>

                        <div class="img-upload-show mt-4" >
                            <div class="d-flex" >
                                      <div class="hidden-img" v-if="adsImages.length  <= 6">
                                        <div class="position-relative" v-for="(image, key) in adsImages" :key="key" >
                                          <button class="remove-img text-white" type="button" @click="removeImage(image, key)">
                                            &times;
                                          </button>
                                          <img class="preview img-thumbnail" :ref="'image'" /> 

                                        </div>

                                      </div>


                            </div>
                            <div v-if="showValid" class="imageAlert">    
                              <v-alert type="error">
                                  غير مسموح بأكثر من 6 صور 
                              </v-alert>    
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
                          placeholder="أدخل اسم الإعلان"
                          name="name"
                          v-model="name"
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
                          name="price"
                          v-model="price"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> مدة الإعلان (المدة بالايام) </label>
                      <div class="main-input">
                        <input
                          type="number"
                          class="input-me"
                          placeholder="أدخل مدة عرض الإعلان"
                          name="duration"
                          v-model="duration"
                        />
                      </div>
                    </div>
                    <!-- القسم الرئيسيي -->
                    <div class="input-g">
                      <label for="" class="main-label"> القسم الرئيسي </label>
                      <div class="main-input">

                        <select name="category_id" id="" class="input-me select" @change="getCatId()" v-model="category_id">
                          <option value="" selected disabled hidden>
                            اختر القسم الرئيسي
                          </option>
                          <option :value="cat.id" v-for="cat in categories" :key="cat.id"> {{ cat.name }} </option>
                        </select>
                        <i class="fa-solid fa-angle-down main-icon"></i>
                      </div>
                    </div>
                    <!-- القسم الفرعي  -->
                    <div class="input-g">
                      <label for="" class="main-label"> القسم الفرعي </label>
                      <div class="main-input">
                        <select name="sub_category_id" id="" class="input-me select" v-model="sub_category_id">
                          <option value="" selected disabled hidden>
                            اختر القسم الفرعي
                          </option>
                          <option :value="subCat.id" v-for="subCat in subCategories" :key="subCat.id"> {{ subCat.name }} </option>
                        </select>
                        <i class="fa-solid fa-angle-down main-icon"></i>
                      </div>
                    </div>
                    <!-- المدينة -->
                    <div class="input-g">
                      <label for="" class="main-label"> المدينة </label>
                      <div class="main-input position-relative">


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
                            name="details"
                            v-model="details"
                            class="input-me text-area"
                            placeholder="اكتب تفاصيل الإعلان"
                        ></textarea>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> وسيلة اتصال </label>
                      <div class="main-input">
                        <input
                            name="contact_method"
                            v-model="contact_method"
                            type="text"
                            class="input-me"
                            placeholder="أدخل رقم الجوال أو البريد الالكتروني"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> حالة المنتج </label>
                      <div class="radio-boxs">
                        <div class="box">
                          <input type="radio" name="status" v-model="status" value="new" id="da3ef"  />
                          <label for="da3ef">جديد</label>
                        </div>
                        <div class="box">
                          <input type="radio" name="status" v-model="status" value="used" id="maqbool" />
                          <label for="maqbool">مستعمل</label>
                        </div>
                      </div>
                    </div>

                    <div class="input-g">
                      <button type="submit" class="main-btn md up mx-auto" :disabled="disabled" @click.prevent="uploadAdv()">
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
</template>

<script>
import axios from 'axios';
import loader from '../../components/Shared/pageLoader.vue'

export default {
    data(){
        return{
            camImage : require('../../assets/imgs/photo-camera.png'),
            // form inputs 
            productStatus : '',
            contact_method : '',
            details : '',
            city : '',
            sub_category_id : '',
            category_id : '',
            duration : '',
            price : '',
            name : '',

            imags : [],
            loader : true , 



            // images previewed 
            adsImages : [],
            adsImagesName : [],
            showValid : false,

            // get categories 
            categories : [],
            // get sub_category_id 
            subCategories : [],


            // cities 
            cities : [],
            city_id : null,

            // loading pagination handle 
            regionQuery : null ,

            disabled : false





        }
    },

    computed:{
      filteredRegions() {
            return this.cities.filter(region => {
                return region.name.toLowerCase().includes(this.regionQuery.toLowerCase())
            })
        },
    },
    components:{
      loader
    },
    methods:{
        

        // image preview 
        uploadAdImages(file){


            // preview operation 
            let selectedImages = file.files ;

            for( let i = 0 ; i < selectedImages.length ; i++ ){
                this.adsImages.push( selectedImages[i] )
                this.adsImagesName.push(selectedImages[i].name);
            }


       

              if(this.adsImages.length > 6){
                this.adsImages = []
                this.showValid = true
                 

              }else{
                this.showValid = false
              }

              this.applyImage();


        },

        // remvoe image 
        removeImage(image, key){
            this.adsImages.splice(key, 1);
            this.applyImage();

        },


        applyImage() {
          for (let i = 0; i < this.adsImages.length; i++) {
            let reader = new FileReader();
            reader.onload = () => {
              this.$refs.image[i].src = reader.result;
            };
            reader.readAsDataURL(this.adsImages[i]);
          }
        },


        // submit upload ads form 
        async uploadAdv(){

            this.disabled = true
            const fd = new FormData( this.$refs.uploadAdForm );
            fd.append('city_id', this.city_id)


            for (var i = 0; i < this.adsImages.length; i++) {
                this.imags = this.adsImages[i];
                fd.append('image[]' , this.imags )
            }
            
            // console.log(this.imags)
            

            await axios.post('add-advertisement', fd, {
              headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
              }
            })
            .then(  (res)=>{

              if( res.data.key == "success" ){
                 this.$swal({
                    icon: 'success',
                    title: res.data.msg,
                    timer: 2000,
                    showConfirmButton: false,

                });
                
                localStorage.setItem('random_token', res.data.data.random_token)
                localStorage.setItem('ad_price', res.data.data.advertisement_cost)
                
                this.$router.push('/adsPayment')

              }else if( res.data.key == "needReActivation" ){
                this.$swal({
                    icon: 'error',
                    title: res.data.msg,
                    timer: 2000,
                    showConfirmButton: false,
                });

                setTimeout(() => {
                  this.$router.push('/editProfileView');
                }, 2000);
              }
              else{
                this.$swal({
                    icon: 'error',
                    title: res.data.msg,
                    timer: 2000,
                    showConfirmButton: false,

                });
              }
              this.disabled = false
            }  )
            .catch( (err)=>{
                console.log(err)
            } )
            
        },

        // get categories to filter
        async getCategories(){
          await axios.get('categories')
          .then( (res)=>{
            this.categories = res.data.data
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

        // get cities 
        async getCities(){
          this.showList1 = true
          await axios.get('cities')
          .then( (res)=>{
            this.cities = res.data.data
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
      },
      mounted(){
        this.getCategories()
        this.loader = false
      }
}
</script>

<style>
.imageAlert{
  color: red;
  display: flex;
}
</style>