<template>
  <!-- Start User Info -->
  <div class="user-info sec-padding">
    <div class="container">
      <div class="user-con">
        <img :src="uuimg" alt="" class="user-img" />
        <span class="user-name">عبداللة زكريا</span>
      </div>
    </div>
  </div>
  <!-- End User Info -->

  <!-- Start advertisements Section -->
  <div class="explore-section">
    <div class="container">
      <div class="main-title">
        <h3 class="main-tit-text lg">اعلاناته</h3>
        <router-link to="/advertisementsView" class="all-anchor">عرض الكل</router-link>
      </div>

      <div class="eplore-cards">
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
    </div>
  </div>
  <!-- End advertisements Section -->

  <!-- Start Rating Sections -->
  <div class="add-rating-sec main-padding">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6">
          <div class="ratings height-full">
            <div class="main-title">
              <h3 class="main-tit-text lg">تقييماته</h3>
            </div>

            <div class="rating-cards" v-if="rates.length >= 1">
              <div class="rating-card" v-for="rate in rates" :key="rate.id">
                <img :src="rate.userImg" class="rate-img" alt="" />
                <div class="rate-info">
                  <p class="rate-text">
                    {{ rate.title }}
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
                      v-model="rate.rating"
                    ></v-rating>
                  </div>
                </div>
              </div>
            </div>
            <div class="dander-noti" v-else>لا توجد تقييمات</div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="add-rating height-full">
            <div class="main-title">
              <h3 class="main-tit-text lg">اترك تقييمك</h3>
            </div>

            <div class="rating-form section-style">
              <form action="">
                <div class="inputs-container mb-4">
                  <div class="input-g">
                    <div class="main-input">
                      <textarea
                        class="input-me text-area"
                        placeholder="اكتب هنا"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <v-rating
                  half-increments
                  color="gray"
                  length="5"
                  size="54"
                  v-model="rateUs"
                ></v-rating>
                <button type="submit" class="main-btn md up mx-auto">
                  إرسال
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Rating Sections -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "profileView",

  data() {
    return {
      rateUs: "",
      uuimg: require("../assets/imgs/ads2.png"),
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
      rates: [
        // array
        {
          id: 1,
          title:
            "هذا النص هو مثال لنص يمكن ان يستخدم في نفس  يستخدم في نفس  يستخدم في نفس المساحة",
          name: "عبدالرحمن سليمان",
          userImg: require("../assets/imgs/user2.png"),
          rating: 5,
        },
        {
          id: 2,
          title:
            "هذا النص هو مثال لنص يمكن ان يستخدم في نفس يستخدم في نفس  يستخدم في نفس المساحة يستخدم في نفس  يستخدم في نفس المساحة",
          name: "عبدالله زكريا",
          userImg: require("../assets/imgs/user2.png"),
          rating: 3,
        },
        {
          id: 3,
          title:
            "هذا النص هو مثال لنص يمكن ان يستخدم في نفس  يستخدم في نفس  يستخدم في نفس المساحة",
          name: "عبدالرحمن سليمان",
          userImg: require("../assets/imgs/user2.png"),
          rating: 1,
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
.add-rating .v-rating {
  direction: ltr;
  justify-content: center;
  width: 100%;
}
.add-rating .v-rating__wrapper {
  /* width: 50px; */
}
.add-rating .v-rating__item .v-btn .v-icon {
  font-size: 35px;
}
</style>
