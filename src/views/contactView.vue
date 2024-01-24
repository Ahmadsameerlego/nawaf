<template>
  <!-- Start map Section -->
  <!-- <div class="map-section"> -->
    <!-- <div id="map" style="width: 100%; height: 500px"></div> -->
    <!-- <GMapMap
      :center="center"
      :options="options"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100vw; height: 500px"
    >
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="center = m.position"
      />
    </GMapMap>
  </div> -->
  <!-- End map Section -->

  <!-- Start Contact Section -->
  <div class="contact-section">
    <div class="container">
      <div class="contact-content px-md-5 px-4 sec-padding">
        <h2 class="section-title"> {{ $t('contact.title') }} </h2>

        <div class="row gy-5">
          <div class="col-md-6">
            <form @submit.prevent="contactUs" ref="contactForm">
              <div class="inputs-container">
                <div class="input-g">
                  <div class="main-input">
                    <input
                      type="text"
                      class="input-contact"
                      v-model="contact.name"
                      name ="name"
                      :placeholder="$t('contact.fullName')"
                    />
                  </div>
                </div>


                <div class="input-g">
                  <div class="main-input">
                    <input
                      type="number"
                      class="input-contact"
                      v-model="contact.phone"
                      name ="phone"
                      placeholder="رقم الهاتف"
                    />
                  </div>
                </div>

                <div class="input-g">
                  <div class="main-input">
                    <input
                      type="email"
                      v-model="contact.email"
                      name="email"
                      class="input-contact"
                      :placeholder="$t('contact.email')"
                    />
                  </div>
                </div>

                <div class="input-g">
                  <div class="main-input">
                    <textarea
                      v-model="contact.message"
                      name="message"
                      class="input-contact text-area"
                      :placeholder="$t('contact.messageText')"
                    ></textarea>
                  </div>
                </div>

                <div class="input-g">
                  <button type="submit" class="main-btn md up" :disabled="disabled"> {{ $t('contact.send') }}
                    <div class="spinner-border" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-md-6">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="contact-information">
                  <div class="contact-item">
                    <div class="contact-img">
                      <img :src="img1" alt="" />
                    </div>
                    <div class="contact-info">
                      <span class="contact-name"> {{ $t('contact.email') }} </span>
                      <a :href="'mailto:'+email"><p class="contact-text"> {{ email }} </p></a>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-img">
                      <img :src="img2" alt="" />
                    </div>
                    <div class="contact-info">
                      <span class="contact-name"> {{ $t('contact.phone') }} </span>
                      <a :href="'tel:'+phone"><p class="contact-text"> {{ phone }} </p></a>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-img">
                      <img :src="img3" alt="" />
                    </div>
                    <div class="contact-info">
                      <span class="contact-name"> {{ $t('contact.address') }} </span>
                      <p class="contact-text"> {{ address }} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Contact Section -->
</template>

<script>
import { defineComponent } from "vue";

import axios from 'axios';

export default defineComponent({
  //   components: { GMapMap },
  name: "departmentsView",
  data() {
    return {
      img1: require("../assets/imgs/email.png"),
      img2: require("../assets/imgs/phone-call.png"),
      img3: require("../assets/imgs/location.png"),
      center: { lat:0, lng: 0 },
      markers: [
        {
          position: {
            lat: 0,
            lng: 0,
          },
        },
      ],
      google_key: '',
      address : '',
      phone : 0,
      email : '',

      disabled : false,
      contact : {
        name : '',
        email : '',
        message : ''
      }


    }
  },

  methods:{

    // get current location 
      geolocation () {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          this.markers[0].position = this.center
        });
      },

      // get contact data 
      async getContactData(){
        await axios.get('contact-data')
        .then( (res)=>{
          this.phone = res.data.data.phone
          this.email = res.data.data.email
          this.address = res.data.data.address
          this.google_key = res.data.data.google_key
        } )
      },

      // post contact us 
      async contactUs(){
                  this.disabled = true

        const fd = new FormData(this.$refs.contactForm);
        await axios.post('contact-us', fd)
        .then( (res)=>{
          if( res.data.key == "success" ){
             this.$swal({
                  icon: 'success',
                  title: res.data.msg,
                  timer: 2000,
                  showConfirmButton: false,

              });

              this.contact.name = ''
              this.contact.email = ''
              this.contact.message = ''
              this.contact.phone = ''
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

  components: {},

  mounted(){
    this.geolocation()

    this.getContactData()
  }
});
</script>
<style scoped>
.contact-section
  .contact-content
  .contact-information
  .contact-item
  .contact-img
  img {
  max-height: 45px;
  max-width: 45px;
}
</style>
