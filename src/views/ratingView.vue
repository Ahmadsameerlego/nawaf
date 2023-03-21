<template>
  <!-- Start rating Section -->
  <div class="rating-section main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="ratings section-style sec-padding">
            <h2 class="section-title"> {{ $t('nav.rates') }} </h2>


            <div class="rating-cards px-md-4 px-2" v-if="rates.length>0">


              <div class="rating-card" v-for="rate in rates" :key="rate.id">
                <img :src="rate.image" class="rate-img" alt="" />
                <div class="rate-info">
                  <p class="rate-text">
                    {{ rate.comment }}
                  </p>
                  <div class="rate-foot">
                    <span class="user-name">{{ rate.name }}</span>
                    <v-rating
                      half-increments
                      readonly="true"
                      color="orange"
                      length="5"
                      size="58"
                      marginRight="2"
                      v-model="rate.num_of_stars"
                    ></v-rating>
                  </div>
                </div>
              </div>
            </div>

            <div class="noDataFound" v-else>
              <v-alert
                color="info"
                icon="$info"
                title="لا تتوفر تقييمات"
              ></v-alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End rating Section -->
</template>

<script>
import { defineComponent } from "vue";
import axios from 'axios'

export default defineComponent({
  name: "raitingView",
  data() {
    return {
      rates : [],
      pagination : {}
    };
  },
  methods: {
    // get rates 
    async showRates(){
      await axios.get('show-rates', {
        headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.rates = res.data.data.rates.data
        this.pagination = res.data.data.pagination
      } )
    }
  },

  components: {},
});
</script>
<style>
a {
  text-decoration: none !important;
}
.rate-info {
  width: 100%;
}
.rating-card .v-rating {
  direction: ltr;
}
.rating-card .v-rating__wrapper {
  width: 30px;
}
</style>
