<template>
  <!-- Start advertisements Section -->
  <div class="advertisements-section main-padding">
    <div class="container">
      <div class="main-title media">
        <h3 class="main-tit-text">تصفح قسم الالكترونيات</h3>

        <div class="title-inputs">
          <form action="" class="search">
            <input type="text" placeholder="ابحث" class="search-input" />
            <button type="submit" class="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <form
            action=""
            class="search"
            data-bs-toggle="modal"
            data-bs-target="#filterModal"
          >
            <input type="text" placeholder="فلتر حسب" class="search-input" />
            <button type="button" class="search-btn">
              <img :src="filterImg" alt="" />
            </button>
          </form>
        </div>
      </div>
      <div class="ads-cards">
        <div class="ads-card" v-for="fav in favs" :key="fav.id">
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
            <div class="favorite-icon" ref="favoriteicon" @click="addHeart()">
              <font-awesome-icon v-if="hearted" icon="fa-solid fa-heart" />
              <font-awesome-icon v-if="!hearted" icon="fa-regular fa-heart" />
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
  name: "catogryView",
  data() {
    return {
      filterImg: require("../assets/imgs/icons8-slider-50.png"),
      hearted: true,
      favs: [
        // array
        {
          id: 1,
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
    addHeart() {
      this.hearted = !this.hearted;
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
