<template>
  <!-- start slider  -->
  <sliderNew />
  <!-- end slider  -->

  <!-- Start ads-detailes Section -->
  <div class="ads-detailes sec-padding mt-3">
    <div class="container">
      <div class="main-title">
        <h3 class="main-tit-text lg">إعلان عن لابتوب جديد</h3>
        <div class="ads-type">
          جديد
          <img :src="newImg" alt="" />
        </div>
      </div>

      <div class="terms">
        <p class="terms-text">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص
          هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
          مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
          الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال
          لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
          العربى
        </p>

        <p class="terms-text">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص
          هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
          مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
          الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال
          لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
          العربى
        </p>

        <p class="terms-text">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص
          هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
          مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
          الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال
          لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
          العربى
        </p>
      </div>
    </div>
  </div>
  <!-- End ads-detailes Section -->

  <!-- Start ads-detailes Section -->
  <div class="ads-detailes pb-4">
    <div class="container">
      <div class="main-title">
        <h3 class="main-tit-text lg">مُضاف بواسطة</h3>
      </div>

      <div class="ads-detailes-info">
        <div class="ads-det-num">
          <img class="user-img" :src="personImg" alt="" />
          <span class="number">محمد أحمد</span>
        </div>
        <div class="ads-det-num">
          <img :src="callImg" alt="" />
          <span class="number">966561215455</span>
        </div>
      </div>
    </div>
  </div>
  <!-- End ads-detailes Section -->
</template>

<script>
import { defineComponent } from "vue";
import sliderNew from "../components/adverses/sliderNew.vue";

export default defineComponent({
  name: "catogryDetails",
  data() {
    return {
      newImg: require("../assets/imgs/new.png"),
      personImg: require("../assets/imgs/user1.png"),
      callImg: require("../assets/imgs/telephone.png"),
    };
  },
  methods: {},

  components: { sliderNew },
});
</script>
<style>
a {
  text-decoration: none !important;
}
</style>
