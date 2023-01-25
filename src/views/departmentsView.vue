<template>
  <!-- Start Categories Section -->
  <div class="categories-section main-padding">
    <div class="container">
      <div class="categories-con">
        <router-link :to="{ name: 'catogryView' , params: { id: catogry.id } }" class="categories-card" v-for="catogry in catogries" :key="catogry.id">
          <img class="catego-img" :src="catogry.img" alt="" />
          <span class="catego-name">{{catogry.title}}</span>
        </router-link>
     
      </div>
    </div>
  </div>
  <!-- End Categories Section -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "departmentsView",
  data() {
    return {
      catogries: [
        // array
        { id: 1 , title: "الكترونيات", img: require("../assets/imgs/categories-1.png") },
        { id: 2 , title: " شرائح ", img: require("../assets/imgs/categories-1.png") },
        { id: 3 , title: " العاب ", img: require("../assets/imgs/categories-1.png") },
      ],
    };
  },

  components: {},
});
</script>
<style >
.categories-con .categories-card {
  text-decoration: none;
  color: #262626;
}
</style>