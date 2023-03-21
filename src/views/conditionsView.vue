<template>
  <!-- loader  -->
  <loader v-if="loader" />
  <!-- Start terms Section -->
  <div class="terms-section main-padding">
    <div class="container">
      <h2 class="section-title">الشروط والأحكام</h2>
      <div class="terms">
        <p class="terms-text" v-html="term"></p>

  

  
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
      term : ''
    };
  },
  methods: {
    async getTerms(){
      await axios.get('terms')
      .then( (res)=>{
        this.term = res.data.data.terms
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
