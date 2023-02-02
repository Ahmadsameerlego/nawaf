<template>
  <!-- Start advertisements Section -->
  <div class="notification-section main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="not-cards"    v-if="notis.length >= 1">
            <div
              class="not-card active"
              :class="{ showFalse : !noti.showNoti}"
              v-for="noti,i in notis"
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
                <span class="not-delete" @click="removeNoti(i)">
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
            "111111111111111111111111111",
            showNoti: true,
        },
        {
          id: 2,
          time: "الان",
          title:
            "222222222222222222222222222222222222222222   ",
            showNoti: true,
        },
        {
          id: 3,
          time: "الان",
          title:
            "33333333333333333333333333333333",
            showNoti: true,
        },
      ],
    };
  },
  methods: {
    removeNoti(i) {
        this.notis.splice(i , 1);
        console.log(this.notis);
        
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
