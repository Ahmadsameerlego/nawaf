<template>
  <loader v-if="loader" />
  <relatedComp :companies="companies" />
</template>

<script>
import relatedComp from '../components/companies/relatedComp.vue';
import loader from '../components/Shared/pageLoader.vue';
import axios from 'axios';
export default {
  data() {
    return {
      loader : true,
      companies : []
    };
  },
  methods:{
    async getCompanies(){
      await axios.get('shippings')
      .then( (res)=>{
        this.companies = res.data.data.shippings

        this.loader = false
      } )
    }
  },
  mounted(){
    this.getCompanies()
  },
  components:{
    relatedComp,
    loader
  }
};
</script>

<style>
.all-anchor {
  text-decoration: underline !important;
}
</style>
