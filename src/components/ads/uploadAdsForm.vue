<template>
    <div class="add-ads main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="add-form section-style sec-padding">
            <div class="row">
              <div class="col-lg-8 col-md-10 col-11 mx-auto">

                <!-- form  -->
                <form ref="uploadAdForm">
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
                                          <button class="remove-img text-white" type="button" @click="removeImage(key)">
                                            &times;
                                          </button>
                                          <img class="preview img-thumbnail" v-bind:ref="'image' +parseInt( key )" /> 

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
                          name="adName"
                          v-model="adName"
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
                          name="adPrice"
                          v-model="adPrice"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> مدة الإعلان </label>
                      <div class="main-input">
                        <input
                          type="text"
                          class="input-me"
                          placeholder="أدخل مدة عرض الإعلان"
                          name="adDuration"
                          v-model="adDuration"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> القسم الرئيسي </label>
                      <div class="main-input">
                        <select name="mainDepartment" id="" class="input-me select" v-model="mainDepartment">
                          <option value="" selected disabled hidden>
                            اختر القسم الرئيسي
                          </option>
                          <option value="1">اختر القسم الرئيسي</option>
                          <option value="2">اختر القسم الرئيسي</option>
                        </select>
                        <i class="fa-solid fa-angle-down main-icon"></i>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> القسم الفرعي </label>
                      <div class="main-input">
                        <select name="subDepartment" id="" class="input-me select" v-model="subDepartment">
                          <option value="" selected disabled hidden>
                            اختر القسم الفرعي
                          </option>
                          <option value="1">اختر القسم الرئيسي</option>
                          <option value="2">اختر القسم الرئيسي</option>
                        </select>
                        <i class="fa-solid fa-angle-down main-icon"></i>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> المدينة </label>
                      <div class="main-input">
                        <select name="city" id="" class="select input-me" v-model="city">
                          <option value="" selected disabled hidden>
                            اختر المدينة
                          </option>
                          <option value="1">اختر القسم الرئيسي</option>
                          <option value="3">اختر القسم الرئيسي</option>
                        </select>
                        <i class="fa-solid fa-angle-down main-icon"></i>


                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> تفاصيل الإعلان </label>
                      <div class="main-input">
                        <textarea
                            name="adDetails"
                            v-model="adDetails"
                            class="input-me text-area"
                            placeholder="اكتب تفاصيل الإعلان"
                        ></textarea>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> وسيلة اتصال </label>
                      <div class="main-input">
                        <input
                            name="mail_phone"
                            v-model="mail_phone"
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
                          <input type="radio" name="newProduct" v-model="productStatus" value="new" id="da3ef"  />
                          <label for="da3ef">جديد</label>
                        </div>
                        <div class="box">
                          <input type="radio" name="reuseProduct" v-model="productStatus" value="reuse" id="maqbool" />
                          <label for="maqbool">مستعمل</label>
                        </div>
                      </div>
                    </div>

                    <div class="input-g">
                      <button type="submit" class="main-btn md up mx-auto" @click.prevent="uploadAdv()">
                        استمرار
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
export default {
    data(){
        return{
            camImage : require('../../assets/imgs/photo-camera.png'),

            // form inputs 
            productStatus : '',
            mail_phone : '',
            adDetails : '',
            city : '',
            subDepartment : '',
            mainDepartment : '',
            adDuration : '',
            adPrice : '',
            adName : '',



            // images previewed 
            adsImages : [],
            adsImagesName : [],
            showValid : false


        }
    },

    components:{
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

            for (let i=0; i<this.adsImages.length; i++)
            {
                    let reader = new FileReader(); //instantiate a new file reader
                    reader.addEventListener('load', function(){
                        this.$refs['image' + parseInt( i )][0].src = reader.result;
                    }.bind(this), false);  //add event listener

                reader.readAsDataURL(this.adsImages[i]);
            }
            if(this.adsImages.length > 6){
              this.adsImages = []
              this.showValid = true
            }else{
              this.showValid = false
            }
        },

        // remvoe image 
        removeImage(key){
            this.adsImages.splice(key, 1);
        },

        // submit upload ads form 
        async uploadAdv(){
            const fd = new FormData( this.$refs.uploadAdForm );

            
            fd.append('imagesFiles' , this.adsImagesName)


            await axios.post('posts', fd)
            .then(  (res)=>{
                console.log(res)
                this.$router.push('/adsPayment')
            }  )
            .catch( (err)=>{
                console.log(err)
            } )
            
        }
        },
}
</script>

<style>
.imageAlert{
  color: red;
  display: flex;
}
</style>