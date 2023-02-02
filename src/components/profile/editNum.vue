<template>
     <!-- Phone Modal -->
     <div class="modal fade" id="phoneModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <button type="button" class="close-model-btn" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-regular fa-circle-xmark"></i>
            </button>

            <div class="content-model-me">

                <div class="modal-header">
                  <h2 class="section-title">تغيير رقم الجوال</h2>
                </div>

                <form action="add-ads.html" class="modal-form">
                    <div class="modal-body">

                        <div class="inputs-container">

                            <div class="input-g">
                                <label for="" class="main-label">
                                    كلمة المرور
                                </label>
                                <div class="main-input">
                                    <input type="password" class="input-me" placeholder="أدخل كلمة المرور">
                                </div>
                            </div>

                            <div class="input-g">
                                <label for="" class="main-label">
                                    رقم الجوال الجديد
                                </label>
                                <div class="main-input">
                                    <input type="number" class="input-me" placeholder="أدخل رقم الجوال الجديد">
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up" type="button" data-bs-toggle="modal" data-bs-target="#codeModal" data-bs-dismiss="modal" aria-label="Close">ارسال</button>
                    </div>

                </form>

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
