<template>
  <loader v-if="loader" />
  <!-- Start Categories Section -->
  <div class="categories-section main-padding">
    <div class="container">
      <div class="categories-con">
        <router-link @click="storeDepartName(catogry.name)" :to="{ name: 'catogryView' , params: { id: catogry.id } }" class="categories-card" v-for="catogry in categories" :key="catogry.id">
          <img class="catego-img" :src="catogry.image" alt="" />
          <span class="catego-name">{{catogry.name}}</span>
        </router-link>
     
      </div>
    </div>
  </div>
  <!-- End Categories Section -->
</template>

<script>
import { defineComponent } from "vue";

import axios from 'axios';

import loader from '../components/Shared/pageLoader.vue'


export default defineComponent({
  name: "departmentsView",
  data() {
    return {
      categories: [],
      loader : true,
      catsIds : []
    };
  },

  components: {
    loader
  },

  methods:{
    storeDepartName(name){
      localStorage.setItem('departmentName', name)
    },
    async getCategories(){
      await axios.get('categories')
      .then((res)=>{
        this.categories = res.data.data
        this.$store.dispatch('categories', this.categories)
        this.loader = false

        for( let i = 0 ; i < this.categories.length ; i++ ){
          this.catsIds.push(this.categories[i].id)
        }
        localStorage.setItem('catsIds', this.catsIds)

      })
    }
  },
  beforeMount(){
    this.getCategories()
  },
  mounted(){

  }

});
</script>
<style >
.categories-con .categories-card {
  text-decoration: none;
  color: #262626;
}
</style>