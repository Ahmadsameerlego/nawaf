<template>
  <div class="company-section main-padding">
    <div class="container">
      <div class="main-title">
        <h3 class="main-tit-text"> {{ $t('cats.deliveryCompans') }} </h3>
        <a href="shipping-companies.html" class="all-anchor"> {{ $t('cats.all') }} </a>
      </div>

      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="row company-cards gy-4 gx-md-5">


            <div class="col-xl-2 col-lg-3 col-md-4 col-6" v-for="company in companys" :key="company">
              <div class="company-card">
                <img class="company-img" :src="company.compImage" alt="" />
                <div class="company-num">
                  <img :src="company.telephone" alt="" />
                  <span class="number"> {{ company.compPhone }} </span>
                </div>
                <div class="company-num">
                  <img :src="company.whats" alt="" />
                  <span class="number"> {{ company.compWhats }} </span>
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
            companys : [
                { telephone: require('../../assets/imgs/telephone.png'), whats: require('../../assets/imgs/whatsapp.png'), compImage : require('../../assets/imgs/company.png') , compPhone : 966561215455 ,compWhats : 966561215455  }
            ]
        }
    }
};
</script>

<style>
.all-anchor{
    text-decoration: underline !important;
}
</style>