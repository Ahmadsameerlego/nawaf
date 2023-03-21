<template>
  <!-- Alert Account Delete Modal -->
  <div
    class="modal fade done"
    id="alert2Modal"
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
            <h2 class="section-title">هل تود بالفعل حذف الحساب؟</h2>
          </div>

          <div class="modal-body">
            <img :src="logOutImg" alt="" class="done-img" />
          </div>

          <div class="modal-footer">
            <button
              class="main-btn red md up"
              aria-label="Close"
              @click="deleteAcc()"
            >
              نعم
            </button>
            <button
              class="main-btn md up"
              type="button"
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
</template>

<script>
import { defineComponent } from "vue";
import axios from 'axios'
export default defineComponent({
  name: "removeAccountModal",
  data() {
    return {
        logOutImg: require("../../assets/imgs/alert.gif"),
    };
  },
  methods: {
    async  deleteAcc(){
      await axios.delete('delete-account', {
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

          
          localStorage.removeItem('token')
          localStorage.setItem('IsLoggedIn', 'false')
          this.$router.push('/');
          setTimeout(() => {  
            location.reload();
          }, 2000);
        }else{
          this.$swal({
              icon: 'error',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,

          });
        }
      } )
    }
  },

  components: {},
});
</script>
<style></style>
