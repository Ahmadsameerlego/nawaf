<template>
  <!-- Password Modal -->
  <div
    class="modal fade"
    id="passwordModal"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
    v-show="updatePassModal"
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
            <h2 class="section-title"> {{ $t('contact.changePassTitle') }} </h2>
          </div>

          <form @submit.prevent="updatePassword()" ref="updatePassword">
            <div class="modal-body">
              <div class="inputs-container">

                <div class="input-g">
                  <label for="" class="main-label"> {{ $t('contact.currentPass') }} </label>
                  <div class="main-input">
                    <span class="pass-icon main-icon"  @click="switchVisibility()">
                        <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle"/>
                        <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle" />
                    </span>
                    <input
                      class="input-me"
                      :placeholder="$t('contact.enterCurrent')"
                      name="old_password"
                      v-model="old_password"
                      :type="passwordFieldType"
                    />
                  </div>
                </div>

                <div class="input-g">
                  <label for="" class="main-label"> {{ $t('contact.newPass') }} </label>
                  <div class="main-input">
                    <span class="pass-icon main-icon" @click="switchVisibility1()">
                          <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle1"/>
                          <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle1" />
                    </span>
                    <input
                      class="input-me"
                      :placeholder="$t('contact.enterNew')"
                      name="password"
                      v-model="password"
                      :type="passwordFieldType1"
                    />
                  </div>
                </div>

                <div class="input-g">
                  <label for="" class="main-label">
                    {{ $t('contact.confirmPass') }}
                  </label>
                  <div class="main-input">
                    <span class="pass-icon main-icon" @click="switchVisibility2()">
                          <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle2"/>
                          <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle2" />
                    </span>
                    <input
                      :type="passwordFieldType2"
                      class="input-me"
                      :placeholder="$t('contact.enterConfirm')"
                      name="password_confirmation"
                      v-model="password_confirmation"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                class="main-btn md up"
                :disabled="disabled"

              >
                {{ $t('contact.save') }}
                <div class="spinner-border" role="status" v-if="disabled">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Done Modal -->


  <v-dialog
          v-model="dialog"
          width="auto"
          >


          <v-card>

              <div class="d-flex justify-content-end w-100">
                  <button type="button" class="close-model-btn" style="font-size:22px" @click="dialog=false">
                      <i class="fa-regular fa-circle-xmark"></i>
                  </button>
              </div>

              <div class="modal-header">
                <h2 class="section-title">تم تغيير كلمة المرور بنجاح</h2>
              </div>

              <div class="modal-body">
                  <img :src="ModalImg" alt="" class="done-img" />
              </div>

          </v-card>
      </v-dialog>
</template>

<script>
import axios from "axios";
import { mapState , mapMutations , mapGetters } from 'vuex'


export default {
  data() {
    return {
      email_phone: "",
      ModalImg: require("../../assets/imgs/done.gif"),
      password_confirmation : '',
      old_password : '',
      password : '',
      dialog : false,
      updatePassModal : false,
      disabled : false
    };
  },

  computed: {
        ...mapState(["eyeToggle"]),
        ...mapGetters(["eyeToggle"]),
        ...mapState(["passwordFieldType"]),
        ...mapGetters(["passwordFieldType"]),
        ...mapState(["eyeToggle1"]),
        ...mapGetters(["eyeToggle1"]),
        ...mapState(["passwordFieldType1"]),
        ...mapGetters(["passwordFieldType1"]),
        ...mapState(["eyeToggle2"]),
        ...mapGetters(["eyeToggle2"]),
        ...mapState(["passwordFieldType2"]),
        ...mapGetters(["passwordFieldType2"])

  },
  components: {},
  methods: {
    // update password function
    async updatePassword() {

      this.disabled = true
      // initialize formData
      let fd = new FormData(this.$refs.updatePassword);

      // post with axios
      await axios
        .post(`update-passward?_method=patch`, fd, {
          headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((res) => {

          // if success response
          if (res.data.key == "success") {
              this.$swal({
                  icon: 'success',
                  title: res.data.msg,
                  timer: 2000,
                  showConfirmButton: false,
              });

                    this.updatePassModal = false
                    document.querySelector('.modal-backdrop').style.display = "none"

                    setTimeout(() => {
                        this.dialog = true
                    }, 2000);     

          }
          // if failed response
          else {
              this.$swal({
                  icon: 'error',
                  title: res.data.msg,
                  timer: 2000,
                  showConfirmButton: false,
              });
          }

          this.disabled = false
        })
        .catch((err) => {
          console.error(err);
        });
    },

    // show password function
        ...mapMutations(["switchVisibility"]),
        ...mapMutations(["switchVisibility1"]),
        ...mapMutations(["switchVisibility2"]),

  },
  mounted(){
    this.updatePassModal = true
  }
};
</script>

<style scoped>
a {
  color: #333 !important;
}
</style>
