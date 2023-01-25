<template>
  <!-- Start advertisements Section -->
  <div class="advertisements-section main-padding">
    <div class="container">
      <div class="ads-cards">
        <div class="ads-card" v-for="fav,i in favs"  :key="fav.id">
          <div class="card-container">
            <router-link to="/"></router-link>
            <div class="ads-card-head">
              <img :src="fav.img" alt="" />
            </div>
            <div class="ads-card-body">
              <h3 class="ads-title">{{ fav.title }}</h3>
              <p class="ads-city">{{ fav.location }}</p>
              <span class="ads-price">{{ fav.price }}</span>
            </div>
          </div>
          <div class="ads-card-footer">
            <a href="profile.html" class="profile">
              <img class="profile-img" :src="fav.smImg" alt="" />
              <span class="profile-name">{{ fav.auther }}</span>
            </a>
            <div class="favorite-icon" ref="favoriteicon" @click="addHeart(i)">
              <font-awesome-icon v-if="fav.hearted" icon="fa-solid fa-heart" />
              <font-awesome-icon v-if="!fav.hearted" icon="fa-regular fa-heart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End advertisements Section -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "favView",
  data() {
    return {
      
      favs: [
        // array
        {
          id: 1,
          hearted: true,
          title: "اعلان عن لاب توب",
          img: require("../assets/imgs/ads2.png"),
          location: "الرياض - السعودية",
          price: "250 ر.س",
          smImg: require("../assets/imgs/profile.jpg"),
          auther: "عبدالرحمن سليمان",
        },
        {
          id: 2,
          hearted: true,
          title: "اعلان عن لاب توب",
          img: require("../assets/imgs/ads2.png"),
          location: "الرياض - السعودية",
          price: "250 ر.س",
          smImg: require("../assets/imgs/profile.jpg"),
          auther: "عبدالرحمن سليمان",
        },
      ],
    };
  },
  methods: {
    addHeart(i) {
      this.favs[i].hearted = !this.favs[i].hearted;
      console.log(this.hearted);
    },
  },


  components: {},
});
</script>
<style>
a {
  text-decoration: none !important;
}
</style>
