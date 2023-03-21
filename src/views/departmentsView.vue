<template>
  <loader v-if="loader" />
  <!-- Start Categories Section -->
  <div class="categories-section main-padding">
    <div class="container">
      <div class="categories-con">
        <router-link :to="{ name: 'catogryView' , params: { id: catogry.id } }" class="categories-card" v-for="catogry in categories" :key="catogry.id">
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
      loader : true
    };
  },

  components: {
    loader
  },

  methods:{
    async getCategories(){
      await axios.get('categories')
      .then((res)=>{
        this.categories = res.data.data

        this.loader = false
      })
    }
  },

  mounted(){
    this.getCategories()
  }

});
</script>
<style >
.categories-con .categories-card {
  text-decoration: none;
  color: #262626;
}
</style>