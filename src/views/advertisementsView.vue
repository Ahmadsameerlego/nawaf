<template>
  <!-- Start advertisements Section -->
  <div class="explore-section main-padding">
    <div class="container">
      <h2 class="section-title">إعلاناتي</h2>

      <div class="tabs-container-m">
        <div
          class="tab-m"
          :class="{ 'active-tab': showtap1 }"
          @click="showMe()"
        >
          اعلانات نشطة
        </div>
        <div
          class="tab-m"
          @click="showMe2()"
          :class="{ 'active-tab': showtap2 }"
        >
          إعلانات منتهية
        </div>
      </div>

      <div class="eplore-cards" v-if="showtap1">
        <div class="explore-card" v-for="(fav, i) in favs" :key="fav.id">
          <div class="card-container">
            <router-link
              :to="{ name: 'favDetails', params: { id: fav.id } }"
            ></router-link>
            <div class="explore-card-head">
              <img :src="fav.img" alt="" />
            </div>
            <div class="explore-card-body">
              <h3 class="ads-title">{{ fav.title }}</h3>
              <p class="ads-city">{{ fav.location }}</p>
              <span class="ads-price">{{ fav.price }}</span>
            </div>
          </div>
          <div class="explore-card-footer">
            <a href="profile.html" class="profile">
              <img class="profile-img" :src="fav.smImg" alt="" />
              <span class="profile-name">{{ fav.auther }}</span>
            </a>
            <div class="favorite-icon" ref="favoriteicon" @click="addHeart(i)">
              <font-awesome-icon v-if="fav.hearted" icon="fa-solid fa-heart" />
              <font-awesome-icon
                v-if="!fav.hearted"
                icon="fa-regular fa-heart"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="eplore-cards" v-if="showtap2">
        <div class="explore-card" v-for="(fav2, i) in favs2" :key="fav2.id">
          <div class="card-container">
            <router-link
              :to="{ name: 'favDetails', params: { id: fav2.id } }"
            ></router-link>
            <div class="explore-card-head">
              <img :src="fav2.img" alt="" />
            </div>
            <div class="explore-card-body">
              <h3 class="ads-title">{{ fav2.title }}</h3>
              <p class="ads-city">{{ fav2.location }}</p>
              <span class="ads-price">{{ fav2.price }}</span>
            </div>
          </div>
          <div class="explore-card-footer">
            <a href="profile.html" class="profile">
              <img class="profile-img" :src="fav2.smImg" alt="" />
              <span class="profile-name">{{ fav2.auther }}</span>
            </a>
            <div class="favorite-icon" ref="favoriteicon" @click="addHeart2(i)">
              <font-awesome-icon v-if="fav2.hearted" icon="fa-solid fa-heart" />
              <font-awesome-icon
                v-if="!fav2.hearted"
                icon="fa-regular fa-heart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End advertisements Section -->
  <!-- Start advertisements Section -->
  <div class="explore-section main-padding">
    <div class="container"></div>
  </div>
  <!-- End advertisements Section -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "advertisementsView",
  data() {
    return {
      showtap1: true,
      showtap2: false,
      favs: [
        // array
        {
          id: 1,
          hearted: false,
          title: "اعلان عن لاب توب",
          img: require("../assets/imgs/ads2.png"),
          location: "الرياض - السعودية",
          price: "250 ر.س",
          smImg: require("../assets/imgs/profile.jpg"),
          auther: "عبدالرحمن سليمان",
        },
        {
          id: 2,
          hearted: false,
          title: "اعلان عن لاب توب",
          img: require("../assets/imgs/ads2.png"),
          location: "الرياض - السعودية",
          price: "250 ر.س",
          smImg: require("../assets/imgs/profile.jpg"),
          auther: "عبدالرحمن سليمان",
        },
      ],
      favs2: [
        // array
        {
          id: 1,
          hearted: false,
          title: "اعلان عن لاب توب",
          img: require("../assets/imgs/ads2.png"),
          location: "الرياض - السعودية",
          price: "250 ر.س",
          smImg: require("../assets/imgs/profile.jpg"),
          auther: "احمد سمير",
        },
        {
          id: 2,
          hearted: false,
          title: "اعلان عن لاب توب",
          img: require("../assets/imgs/ads2.png"),
          location: "الرياض - السعودية",
          price: "250 ر.س",
          smImg: require("../assets/imgs/profile.jpg"),
          auther: "عبدالله ذكريا",
        },
      ],
    };
  },
  methods: {
    addHeart(i) {
      this.favs[i].hearted = !this.favs[i].hearted;
     
    },
    addHeart2(i) {
      this.favs2[i].hearted = !this.favs2[i].hearted;
    
    },
    showMe() {
      this.showtap1 = true;
      this.showtap2 = false;
    },
    showMe2() {
      this.showtap2 = true;
      this.showtap1 = false;
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
