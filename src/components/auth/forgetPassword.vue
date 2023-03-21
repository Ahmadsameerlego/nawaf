<template>
    <!-- forget password  -->
    <div class="modal fade" v-show="forgetPassword" id="sendModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <button type="button" class="close-model-btn" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-regular fa-circle-xmark"></i>
            </button>

            <div class="content-model-me">

                <div class="modal-header">
                  <h2 class="section-title">كود التفعيل</h2>
                </div>

                <form action="" class="modal-form" @submit.prevent="sendCode()" ref="sendCode">
                    <div class="modal-body">
                        <h4 class="form-title">برجاء ادخال رقم الجوال او البريد الالكتروني</h4>

                        <div class="inputs-container">

                            <div class="input-g">
                                <label for="" class="main-label">
                                    رقم الجوال / البريد الالكتروني
                                </label>
                                <div class="main-input">
                                    <input type="tel" class="input-me" placeholder="أدخل رقم الجوال / البريد الالكتروني" name="phone_or_email" v-model="phone_or_email">
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up blabla" :disabled="disabled" >
                            إرسال
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



    <!-- reset password  -->

    <v-dialog
        v-model="dialog1"
        width="auto"
        persistent
    >
        <v-card>

            <div class="d-flex justify-content-end w-100">
                <button type="button" class="close-model-btn" style="font-size:22px" @click="dialog1=false">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>

            <div class="modal-header">
                <h2 class="section-title">كود التفعيل</h2>
            </div>

            <form  class="modal-form" @submit.prevent="resetPassword()">
    
                <div class="input-g" >
                    <label for="" class="main-label">
                        كلمة المرور الجديدة
                    </label>
                    <div class="main-input">
                        <span class="pass-icon main-icon"  @click="switchVisibility()">
                            <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle"/>
                            <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle" />
                        </span>
                        <input name="password" :type="passwordFieldType" class="input-me"  placeholder="أدخل كلمة المرور" v-model="password">
                    </div>


                </div>

                <div class="input-g">
                    <label for="" class="main-label">
                        تأكيد كلمة المرور الجديدة
                    </label>
                    <div class="main-input">
                        <span class="pass-icon main-icon"  @click="switchVisibility1()">
                            <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle1"/>
                            <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle1" />
                        </span>
                        <input name="password_confirmation" :type="passwordFieldType1" class="input-me"  placeholder="أدخل كلمة المرور مرة أخرى" v-model="password_confirmation">

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

            </form>            
        </v-card>
    </v-dialog>

</template>

<script>
import axios from 'axios'
import VOtpInput from "vue3-otp-input";

import { mapState , mapMutations , mapGetters } from 'vuex'


export default {
    data(){
        return{
            phone_or_email : '',
            dialog : false,

            dialog1 : false ,

            disabled : false,
            forgetPassword : false,

            password : '',
            password_confirmation : ''
        }
    },
    components:{
        VOtpInput
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

    computed:{
        ...mapState(["eyeToggle"]),
        ...mapGetters(["eyeToggle"]),
        ...mapState(["passwordFieldType"]),
        ...mapGetters(["passwordFieldType"]),
        ...mapState(["eyeToggle1"]),
        ...mapGetters(["eyeToggle1"]),
        ...mapState(["passwordFieldType1"]),
        ...mapGetters(["passwordFieldType1"])

    },
    methods :{

        // forget password 
        async sendCode(){

            this.disabled = true
            const fd = new FormData(this.$refs.sendCode)

            await axios.post('forget-password', fd)
            .then( (res)=>{

                if( res.data.key == "success" ){
                    this.$swal({
                        icon: 'success',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,

                    });


                    this.forgetPassword = false
                    document.querySelector('.modal-backdrop').style.display = "none"

                    setTimeout(() => {
                        this.dialog = true
                    }, 2000); 

                    localStorage.setItem('forget_phone', this.phone_or_email)

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
                console.error( err )
            } )
        },


        // send active code 
        async sendOtp(){

            const fd = new FormData()
            fd.append('phone', localStorage.getItem('forget_phone'))

            let otpString = JSON.stringify(this.$refs.otpInput.otp.join(""));
            let otpsNumber = JSON.parse(otpString)

            fd.append('code', otpsNumber)

            await axios.post('check-code', fd)
            .then( (res)=>{
                if( res.data.key == "success" ){
                    this.$swal({
                        icon: 'success',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,

                    });

                    this.dialog1 = true


                }else{
                    this.$swal({
                        icon: 'error',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,

                    });
                }

                this.disabled = false
                this.dialog = false
            } )
        },


        // resend code 
        async resendCode(){
            await axios.get(`resend-code?phone=${localStorage.getItem('forget_phone')}`)
            .then( (res)=>{
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
            } )
        },


        // reset password 
        async resetPassword(){

            const fd = new FormData();

            fd.append('phone', localStorage.getItem('forget_phone'))
            fd.append('password', this.password)
            fd.append('password_confirmation', this.password_confirmation)


            await axios.post('reset-password', fd)
            .then( (res)=>{
                if( res.data.key == "success" ){
                    this.$swal({
                        icon: 'success',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,

                    });
                    this.dialog1 = false
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



        ...mapMutations(["switchVisibility"]),
        ...mapMutations(["switchVisibility1"])

    },

    mounted(){
        this.forgetPassword = true
    }
}
</script>

<style>

</style>