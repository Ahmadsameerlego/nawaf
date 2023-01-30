<template>
  <!-- Start advertisements Section -->
  <div class="notification-section main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="not-cards"    v-if="notis.length >= 1">
            <div
              class="not-card active"
           
              v-for="noti in notis"
              :key="noti.id"
            >
              <div class="right-not">
                <img class="not-img" :src="logo" alt="" />
                <p class="not-info">
                  {{ noti.title }}
                </p>
              </div>
              <div class="left-not">
                <span class="not-time">{{ noti.time }}</span>
                <span class="not-delete" @click="removeNoti(item , index)">
                  <i class="fa-solid fa-trash-can delete-icon"></i>
                  إزالة
                </span>
              </div>
            </div>
          </div>
          <div class="dander-noti" v-else>لا توجد اشعارات</div>
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
      logo: require("../assets/imgs/nawaf.png"),
      notis: [
        // array
        {
          id: 1,
          time: "الان",
          title:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا الننص هو مثال لنص يمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي نفس المساحة",
        },
        {
          id: 2,
          time: "الان",
          title:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا الننص هو مثال لنص يمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي نفس المساحة",
        },
        {
          id: 3,
          time: "الان",
          title:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا الننص هو مثال لنص يمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي نفس المساحة",
        },
      ],
    };
  },
  methods: {
    removeNoti(index) {
        this.notis.splice(index , 1)
    },
  },

  components: {},
});
</script>
<style>
.dander-noti{
    padding: 15px 30px;
    background-color: bisque;
    text-align: center;
}
</style>
