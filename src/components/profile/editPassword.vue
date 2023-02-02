<template>
  <!-- Password Modal -->
  <div
    class="modal fade"
    id="passwordModal"
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
            <h2 class="section-title"> {{ $t('contact.changePassTitle') }} </h2>
          </div>

          <form action="add-ads.html" class="modal-form">
            <div class="modal-body">
              <div class="inputs-container">
                <div class="input-g">
                  <label for="" class="main-label"> {{ $t('contact.currentPass') }} </label>
                  <div class="main-input">
                    <span class="pass-icon main-icon">
                      <i class="fa-regular fa-eye-slash"></i>
                    </span>
                    <input
                      type="password"
                      class="input-me"
                      :placeholder="$t('contact.enterCurrent')"
                    />
                  </div>
                </div>

                <div class="input-g">
                  <label for="" class="main-label"> {{ $t('contact.newPass') }} </label>
                  <div class="main-input">
                    <span class="pass-icon main-icon">
                      <i class="fa-regular fa-eye-slash"></i>
                    </span>
                    <input
                      type="password"
                      class="input-me"
                      :placeholder="$t('contact.enterNew')"
                    />
                  </div>
                </div>

                <div class="input-g">
                  <label for="" class="main-label">
                    {{ $t('contact.confirmPass') }}
                  </label>
                  <div class="main-input">
                    <span class="pass-icon main-icon">
                      <i class="fa-regular fa-eye-slash"></i>
                    </span>
                    <input
                      type="password"
                      class="input-me"
                      :placeholder="$t('contact.enterConfirm')"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                class="main-btn md up"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#doneModal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {{ $t('contact.save') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Done Modal -->
  <div
    class="modal fade done"
    id="doneModal"
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
            <h2 class="section-title">تم تغيير كلمة المرور بنجاح</h2>
          </div>

          <div class="modal-body">
            <img :src="ModalImg" alt="" class="done-img" />
          </div>

          <div class="modal-footer">
            <button
              class="main-btn md up"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              متابعة
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      email_phone: "",
      password: "",
      ModalImg: require("../../assets/imgs/done.gif"),
    };
  },

  computed: {},
  components: {},
  methods: {
    // login function
    async login() {
      // initialize formData
      let fd = new FormData(this.$refs.loginForm);

      // traditional way
      // fd.append( 'email_phone' , this.email_phone )
      // fd.append( 'password' , this.password )

      // post with axios
      await axios
        .post("posts", fd)
        .then((res) => {
          console.log(res);

          // if success response
          if (res.status === 201) {
            this.$swal({
              icon: "success",
              title: "login success",
              text: "Welcome to home page",
            });

            // save token in the session storage
            // sessionStorage.setItem('token', response.data.token);

            // save the token in vuex
            // this.$store.commit('setToken', response.data.token);
          }
          // if failed response
          else {
            this.$swal({
              icon: "error",
              title: "user not found",
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },

    // show password function
    ...mapMutations(["switchVisibility"]),
  },
};
</script>

<style scoped>
a {
  color: #333 !important;
}
</style>
