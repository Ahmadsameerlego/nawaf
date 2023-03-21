<template>
     <!-- Phone Modal -->
     <div class="modal fade" v-show="editPhoneForm" id="phoneModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <button type="button" class="close-model-btn" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-regular fa-circle-xmark"></i>
            </button>

            <div class="content-model-me">

                <div class="modal-header">
                  <h2 class="section-title">تغيير رقم الجوال</h2>
                </div>

                <form ref="editPhone" @submit.prevent="editPhone()" class="modal-form">
                    <div class="modal-body">

                        <div class="inputs-container">

                            <div class="input-g">
                                <label for="" class="main-label">
                                    كلمة المرور
                                </label>
                                <div class="main-input">
                                    <input type="password" name="password" v-model="password" class="input-me" placeholder="أدخل كلمة المرور">
                                </div>
                            </div>

                            <div class="input-g">
                                <label for="" class="main-label">
                                    رقم الجوال الجديد
                                </label>
                                <div class="main-input">
                                    <input type="number" class="input-me" name="phone" v-model="phone" placeholder="أدخل رقم الجوال الجديد">
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up" :disabled="disabled">ارسال
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


    <!-- activation code  -->
      <v-dialog
          v-model="dialog"
          width="auto"
          persistent
          >


          <v-card>

              <div class="d-flex justify-content-end w-100">
                  <button type="button" class="close-model-btn" style="font-size:22px" @click="dialog=false">
                      <i class="fa-regular fa-circle-xmark"></i>
                  </button>
              </div>

              <div class="modal-header">
                <h2 class="section-title">كود التفعيل</h2>
              </div>

              <form  class="modal-form" @submit.prevent="sendOtp()">
                  <div class="modal-body">
                      <h4 class="form-title">برجاء ادخال كود التفعيل المرسل إليك</h4>

                      <div class="code-container">
                          <v-otp-input
                              ref="otpInput"
                              input-classes="otp-input"
                              separator=" "
                              :num-inputs="6"
                              :should-auto-focus="true"
                              v-modal="otpInput"
                              name="otpInput"
                              :is-input-num="true"
                              @on-change="handleOnChange"
                              @on-complete="handleOnComplete"
                              
                          />                     
                      </div>

                  </div>

                  <div class="modal-footer">
                      <button class="main-btn md up mx-auto" :disabled="disabled" type="submit" data-bs-dismiss="modal" aria-label="Close">
                  
                          إرسال
                          <div class="spinner-border" role="status" v-if="disabled">
                              <span class="visually-hidden">Loading...</span>
                          </div>
                          </button>
                  </div>


                  <div class="reg text-center">
                      <button type="button" class="reg-anchor" :disabled="disabled" @click="resendCode()">لم تستلم الكود بعد ؟ <span>أعد إرسال الكود</span></button>
                  </div>
              </form>            
          </v-card>
      </v-dialog>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import VOtpInput from "vue3-otp-input";

export default {
  data() {
    return {
      email_phone: "",
      password: "",
      ModalImg: require("../../assets/imgs/done.gif"),
      dialog : false,
      disabled : false,
      editPhoneForm : false,
      phone : null
    };
  },

  computed: {},
  components: {VOtpInput},
  methods: {
    // edit phone method
    async editPhone() {
      this.disabled = true
      // initialize formData
      let fd = new FormData(this.$refs.editPhone);

      // post with axios
      await axios
        .post("change-phone-send-code", fd, {
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

                    this.editPhoneForm = false
                    document.querySelector('.modal-backdrop').style.display = "none"

                    setTimeout(() => {
                        this.dialog = true
                    }, 2000);     
                    
                    localStorage.setItem('phone', this.phone)
                    


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

    // active code submit 
    async sendOtp(){

            this.disabled = true
            const fd = new FormData();

            // fd.append('phone', localStorage.getItem('phone'))
            // fd.append('device_id', sessionStorage.getItem('device_id'))
            // fd.append('device_type', this.device_type)
            // fd.append('_method', this.method)

            let otpString = JSON.stringify(this.$refs.otpInput.otp.join(""));
            let otpsNumber = JSON.parse(otpString)

            fd.append('code', otpsNumber)


            await axios.post('change-phone-check-code', fd, {
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

                    // let user = JSON.stringify(res.data.data.user)
                    // localStorage.setItem('token' , res.data.data.user.token);
                    // localStorage.setItem('user' , user);

                    // localStorage.setItem('IsLoggedIn', true);
                    this.dialog = false


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
            .catch( (err)=>{
                console.error(err)
            } )
    },
    // resend code 
    async resendCode(){
        await axios.get(`resend-code-in-profile`, {
            headers:{
                Authorization:  `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( (res)=>{
            this.disabled = true
            if( res.data.key == "success" ){
                this.$swal({
                    icon: 'success',
                    title: res.data.msg,
                    timer: 2000,
                    showConfirmButton: false,

                });
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
    },

    // show password function
    ...mapMutations(["switchVisibility"]),
  },
  mounted(){
    this.editPhoneForm = true
  },
  setup() {
      const otpInput = null;

      const handleOnComplete = (value) => {
        console.log("OTP completed: ", value);
      };

      const handleOnChange = (value) => {
        console.log("OTP changed: ", value);
      };

      return { handleOnComplete, handleOnChange, otpInput };
    },
};
</script>

<style scoped>
a {
  color: #333 !important;
}
</style>
