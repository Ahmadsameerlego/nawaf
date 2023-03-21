<template>
  <div class="company-section main-padding">
    <div class="container">
      <div class="main-title">
        <h3 class="main-tit-text"> {{ $t('cats.deliveryCompans') }} </h3>
        <router-link to="/componiesView" class="all-anchor"> {{ $t('cats.all') }} </router-link>
      </div>

      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="row company-cards gy-4 gx-md-5">


            <div class="col-xl-2 col-lg-3 col-md-4 col-6" v-for="company in shipping_companies" :key="company.id">
              <div class="company-card">
                <img class="company-img" :src="company.image" alt="" />
                <div class="company-num">
                  <a :href="'tel:'+company.phone">
                    <img :src="phoneImage" alt="" />
                    <span class="number"> {{ company.phone }} </span>
                  </a>
                </div>
                <div class="company-num">
                  <a  :href="'https://api.whatsapp.com/send?phone='+company.whatsapp">
                    <img :src="whatsAppImage" alt="" />
                    <span class="number"> {{ company.whatsapp }} </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            phoneImage : require('../../assets/imgs/telephone.png'),
            whatsAppImage : require('../../assets/imgs/whatsapp.png'),
        }
    },
    props:{
      shipping_companies : Array
    }
};
</script>

<style>
.all-anchor{
    text-decoration: underline !important;
}
</style>