<template>
  <loader v-if="loader" />
  <div class="notification-section main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="not-cards" v-if="notifications.length>0">
            <div
              class="not-card active"
              :class="{ showFalse : !noti.showNoti}"
              v-for="noti in notifications"
              :key="noti.id"
            >
              <div class="right-not">
                <img class="not-img" :src="logo" alt="" />
                <div class="d-flex flex-column">
                  <h5 class="not-info">
                  {{ noti.title }}
                </h5>
                <p class="not-info">
                  {{ noti.body }}
                </p>
                </div>
              </div>
              <div class="left-not">
                <span class="not-time">{{ noti.created_at }}</span>
                <span class="not-delete" @click="removeNoti(noti.id)">
                  <i class="fa-solid fa-trash-can delete-icon"></i>
                  إزالة
                </span>
              </div>
            </div>
          </div>
          <div class="dander-noti" v-else> لا توجد إشعارات حتى الان </div>

          <!-- pagination -->
          <paginate
              v-model="currentPageP"
              :page-count="totalPagesP"
              :click-handler="page => pageClickHandler(page)"
              :prev-text="'السابق'"
              :next-text="'التالي'"
              :container-class="'pagination'"
              :page-class="'page-item'"    
              :no-li-surround="true"   
              v-if="notifications.length>0"        
          >
          </paginate>
        </div>
      </div>
    </div>
  </div>
  <!-- End advertisements Section -->
</template>

<script>
import { defineComponent } from "vue";
import Paginate from 'vuejs-paginate-next';
import loader from '../components/Shared/pageLoader.vue'


import axios from 'axios';
export default defineComponent({
  name: "favView",
  data() {
    return {
      logo: require("../assets/imgs/nawaf.png"),
      notifications : [],
      currentPageP: 1,
      perPageP: 10,
      totalPagesP: 0,
      loader : true
    };
  },
   created() {
        this.totalPagesP = Math.ceil(this.notifications.length / this.perPageP)
  },
  mounted(){
    this.getNotification()
  },
  methods: {
    async removeNoti(i) {
        await axios.delete(`delete-notification/${i}`, {
          headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then( (res)=>{
          if( res.data.key == "success" ){
            this.$swal({
              icon: 'success',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,
            });
            location.reload()
          }else{
            this.$swal({
              icon: 'error',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,
            });
          }
        } )        
    },

    async getNotification(){
      await axios.get(`notifications` , {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.notifications = res.data.data.notifications
        console.log(this.notifications)

        this.totalPagesP = res.data.data.pagination.total_pages
        this.perPageP = res.data.data.pagination.per_page
        this.currentPageP = res.data.data.pagination.current_page

        this.loader = false
      } )
      .catch( (err)=>{
        console.error(err)
      } )
    },


    pageClickHandler(page) {
        this.currentPageP = page
        this.getCategoriesAds()
    },
  },

  components: {
    Paginate,
    loader
  },
});
</script>
<style>
.dander-noti{
    padding: 15px 30px;
    background-color: bisque;
    text-align: center;
}
</style>
