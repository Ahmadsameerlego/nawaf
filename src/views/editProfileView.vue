<template>
  <laoder v-if="loader" />
  <!-- Start Add Advertisements Section -->
  <div class="add-ads main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="add-form section-style sec-padding">
            <div class="row">
              <div class="col-lg-8 col-md-10 col-11 mx-auto">


                <form ref="updateProfile" @submit.prevent="editProfile()">
                  <h2 class="section-title"> {{ $t('profile.changeInfo') }} </h2>
                  <div class="inputs-container">
                    <div class="upload-ads-img">
                      <div class="upload-img-container">
                        <div class="upload-img">
                          <input
                            type="file"
                            name="image"
                            accept="image/*"
                            id="imgUpload"
                            @change="onFileChange"
                            class="hidden-input upload-profile"
                          />
                          <div class="img-upload-show">
                            <label for="imgUpload" class="label-img">
                              <img
                                :src="image"
                                ref="currentimg"
                                class="wid"
                                :class="{ wid: uploaded }"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> {{ $t('profile.username') }} </label>
                      <div class="main-input">
                        <input
                          type="text"
                          class="input-me"
                          v-model="name"
                          name="name"
                          
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label">
                        {{ $t('profile.email') }}
                      </label>
                      <div class="main-input">
                        <input
                          type="email"
                          class="input-me"
                          v-model="email"
                          name="email"
                          
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> {{ $t('profile.phone') }} </label>
                      <div
                        class="main-input"
                        data-bs-toggle="modal"
                        data-bs-target="#phoneModal"
                      >
                        <input
                          type="number"
                          class="input-me"
                          v-model="phone"
                          name="phone"
                      
                        />
                        <i class="fa-regular fa-pen-to-square main-icon"></i>
                      </div>
                    </div>

                    <div class="input-g mt-4">
                      <button
                        type="submit"
                        class="main-btn dark xl mx-auto up mb-3"
                        :disabled="disabled"
                      >
                        {{ $t('profile.saveChanges') }}
                        <div class="spinner-border" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                      </button>
                      <button
                        type="button"
                        class="main-btn transparent xl mx-auto up"
                        data-bs-toggle="modal"
                        data-bs-target="#passwordModal"
                      >
                        {{ $t('profile.changePass') }}
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
  <editPassword />
  <editNum @uploadProfile="updateProfile()" />
</template>

<script>
import { defineComponent } from "vue";
import editPassword from '../components/profile/editPassword.vue';
import editNum from '../components/profile/editNum.vue';

import axios from 'axios';

import laoder from '../components/Shared/pageLoader.vue'


export default defineComponent({
  name: "EditProfile vue",
  data() {
    return {
      // url: require("../assets/imgs/user2.png"),
      uploaded: false,
      name : '',
      email : '',
      full_phone : '',
      phone : '',
      image : null , 
      user : {},
      disabled : false,
      loader : true
      
    };
  },
  methods: {
    updateProfile(){
      this.getProfile()
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.image = URL.createObjectURL(file);
      this.uploaded = true;
    },

    async getProfile(){
      await axios.get('profile', {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.data.key == "success" ){
          this.user = res.data.data
          this.name = res.data.data.name
          this.email = res.data.data.email
          this.full_phone = res.data.data.full_phone
          this.phone = res.data.data.phone
          this.image = res.data.data.image

          this.loader = false
        }
      } )
    },

    async editProfile(){
      this.disabled = true
      const fd = new FormData(this.$refs.updateProfile)
      await axios.post(`update-profile?_method=put`, fd, {
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
                  this.getProfile()
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
  components: {editPassword , editNum, laoder},
  mounted(){
    this.getProfile()
  }
});
</script>
<style>
.categories-con .categories-card {
  text-decoration: none;
  color: #262626;
}
</style>
