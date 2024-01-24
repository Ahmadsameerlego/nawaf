<template>
    <!-- loader  -->
    <loader v-if="loader" />
    <!-- Start terms Section -->
    <div class="terms-section main-padding">
      <div class="container">
        <h2 class="section-title">الشروط والأحكام</h2>
        <div class="terms">
          <p class="terms-text" v-html="privacy"></p>
  
    
  
    
        </div>
      </div>
    </div>
    <!-- End terms Section -->
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import axios from 'axios'
  import loader from '../components/Shared/pageLoader.vue';
  
  
  export default defineComponent({
    name: "conditionView",
    data() {
      return {
        loader : true,
        privacy : ''
      };
    },
    methods: {
      async getTerms(){
        await axios.get('sale-terms')
        .then( (res)=>{
          this.privacy = res.data.data.sale_terms
          this.loader = false
        } )
      }
    },
    mounted(){
      this.getTerms()
    },
  
    components: {
      loader
    },
  });
  </script>
  <style></style>
  