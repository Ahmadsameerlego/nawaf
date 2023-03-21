<template>
  <!-- Alert Logout Modal -->
  <div
    class="modal fade done"
    id="alertModal"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button
          type="button"
          class="close-model-btn"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </button>

        <div class="content-model-me">
          <div class="modal-header">
            <h2 class="section-title">هل تود بالفعل تسجيل خروج؟</h2>
          </div>

          <div class="modal-body">
            <img :src="logOutImg" alt="" class="done-img" />
          </div>

          <div class="modal-footer">
            <button
              class="main-btn red md up"
              :disabled="disabled"
              type="button"
              @click.prevent="signOut()"
            >
              نعم
               <div class="spinner-border" role="status" v-if="disabled">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </button>
            <button
              class="main-btn md up"
              type="submit"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              لا
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--logout modal-->
</template>

<script>
import { defineComponent } from "vue";
import axios from 'axios'

export default defineComponent({
  name: "removeAccountModal",
  data() {
    return {
        logOutImg: require("../../assets/imgs/alert.gif"),
        disabled : false
    };
  },
  methods: {
    async signOut(){
      const fd = new FormData()
      this.disabled = true

      await axios.post('sign-out', fd , {
        headers:{
          'Authorization':  `Bearer ${localStorage.getItem('token')}`
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


          localStorage.removeItem('token')
          localStorage.removeItem('user')
          localStorage.setItem('IsLoggedIn', 'false')

          setTimeout(() => {
            this.$router.push('/')
            location.reload()
          }, 2000);  


        }else{
          this.$swal({
              icon: 'error',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,

          });
        }
        this.disabled = false
      } )
    }
  },

  components: {},
});
</script>
<style></style>
