<template>
  <!-- Start rating Section -->
  <div class="rating-section main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="ratings section-style sec-padding">
            <h2 class="section-title">تقييماتي</h2>
            <div class="rating-cards px-md-4 px-2">
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End rating Section -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "raitingView",
  data() {
    return {
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
  methods: {},

  components: {},
});
</script>
<style>
a {
  text-decoration: none !important;
}
.rate-info {
  width: 100%;
}
.rating-card .v-rating {
  direction: ltr;
}
.rating-card .v-rating__wrapper {
  width: 30px;
}
</style>
