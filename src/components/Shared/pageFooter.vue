<template>
  <!-- Start Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row footer-cards gy-5">
        <div class="col-lg-5 col-md-6 col-12">
          <div class="footer-logo">
            <router-link to="/" class="foot-logo-img">
              <img :src="nav_and_footer_data.logo" alt="" />
            </router-link>
            <p class="footer-info">
              {{ nav_and_footer_data.content_in_footer }}
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-6">
          <div class="foot-content">
            <h3 class="footer-head"> {{ $t('footer.mainLinks') }} </h3>
            <ul class="footer-links row">
              <div class="col-lg-6">
                
                <router-link to="/" class="link"> {{ $t('footer.home') }} </router-link>
                <router-link to="/depatments" class="link"> {{ $t('footer.cats') }} </router-link>
                <router-link to="/uploadAds" class="link" @click="preventLogin()"> {{ $t('footer.upload') }} </router-link>
                <router-link to="/contactView" class="link"> {{ $t('footer.contact') }} </router-link>
                <router-link to="/conditionsView" class="link"> {{ $t('footer.terms') }} </router-link>
              </div>
              <div class="col-lg-6">
                <router-link to="/editProfileView" class="link" @click="preventLogin()"> {{ $t('nav.profile') }} </router-link>
                <router-link to="/favView" class="link" @click="preventLogin()"> {{ $t('nav.favs') }} </router-link>
              </div>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-2 col-6">
          <div class="foot-content">
            <h3 class="footer-head"> {{ $t('footer.followUs') }} </h3>
            <ul class="footer-links">
              <a v-for="social in socials" :key="social.id" :href="social.link" class="link"> {{ social.name }} </a>
              <!-- <a href="#" class="link"> {{ $t('footer.insta') }} </a>
              <a href="#" class="link"> {{ $t('footer.twitter') }} </a>
              <a href="#" class="link">  {{ $t('footer.youtube') }}</a>
              <a href="#" class="link">  {{ $t('footer.snap') }}</a> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->

  <!-- Start Copy Right -->
  <div class="copy-right">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="copy">
            <a href="https://aait.sa/" target="_blank"
              > {{ nav_and_footer_data.designed_by }} </a
            >
            <span> {{ nav_and_footer_data.property_rights }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Copy Right -->
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      logo: require("../../assets/imgs/nawaf.png"),
      nav_and_footer_data : {},
      socials : []
    };
  },
  methods:{
    async getHomeLogo(){
      await axios.get('home')
      .then( (res)=>{
        this.nav_and_footer_data = res.data.data.nav_and_footer_data
        this.socials = res.data.data.nav_and_footer_data.socials
      } )
      .catch( (err)=>{
        console.error(err)
      } )
    },
    preventLogin(){
      if( localStorage.getItem('IsLoggedIn') == "false" || !localStorage.getItem('IsLoggedIn') ){
          this.$swal({
              icon: 'error',
              title: 'قم بتسجيل الدخول اولا',
              timer: 3000,
              showConfirmButton: false,

          });
      }
    },
  },
  mounted(){
    this.getHomeLogo()
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #262626;
}
</style>
