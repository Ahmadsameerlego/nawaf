<template>



    <div class="modal fade" v-show="regModal" id="regModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <button type="button" class="close-model-btn" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-regular fa-circle-xmark"></i>
            </button>

            <div class="content-model-me">

                <div class="modal-header">
                  <h2 class="section-title">إنشاء حساب</h2>
                </div>

                <form @submit.prevent="signup()" class="modal-form" ref="signUpForm">
                    <div class="modal-body">

                        <div class="inputs-container">
                            <div class="input-g" :class="{ error : v$.name.$error }">
                                <label for="" class="main-label">
                                    اسم المستخدم
                                </label>
                                <div class="main-input">
                                    <input name="name" type="text" class="input-me" :class="{ error :  v$.name.$error}" placeholder="أدخل اسم المستخدم" v-model="name">
                                </div>

                                <span class="error" v-if="v$.name.$error"> {{ $t('validation.required') }} </span>
                            </div>

                            <div class="input-g" :class="{ error : v$.phone.$error }">
                                <label for="" class="main-label">
                                    رقم الجوال
                                </label>
                                <div class="main-input">
                                    <input name="phone" type="number" class="input-me" :class="{ error :  v$.phone.$error}" placeholder="أدخل رقم الجوال" v-model="phone">
                                </div>
                                
                                <span class="error" v-if="v$.phone.$error"> {{ $t('validation.required') }} </span>

                            </div>

                            <div class="input-g" :class="{ error : v$.email.$error }">
                                <label for="" class="main-label">
                                    البريد الالكتروني
                                </label>
                                <div class="main-input">
                                    <input name="email" type="email" class="input-me" :class="{ error :  v$.email.$error}" placeholder="أدخل البريد الالكتروني" v-model="email">
                                </div>

                                <!-- email required  -->
                                <span class="error" v-if="v$.email.$error"> {{ $t('validation.required') }} </span>
                                
                                <!-- email format -->
                                


                            </div>
    
                            <div class="input-g" :class="{ error : v$.password.$error}">
                                <label for="" class="main-label">
                                    كلمة المرور
                                </label>
                                <div class="main-input">
                                    <span class="pass-icon main-icon"  @click="switchVisibility()">
                                        <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle"/>
                                        <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle" />
                                    </span>
                                    <input name="password" :type="passwordFieldType" class="input-me" :class="{ error : v$.password.$error}" placeholder="أدخل كلمة المرور" v-model="password">
                                </div>

                                <span class="error" v-if="v$.password.$error"> {{ $t('validation.required') }} </span>

                            </div>
    
                            <div class="input-g" :class="{ error : v$.password_confirmation.$error}">
                                <label for="" class="main-label">
                                    تأكيد كلمة المرور
                                </label>
                                <div class="main-input">
                                    <span class="pass-icon main-icon"  @click="switchVisibility1()">
                                        <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle1"/>
                                        <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle1" />
                                    </span>
                                    <input name="password_confirmation" :type="passwordFieldType1" class="input-me" :class="{ error : v$.password_confirmation.$error}" placeholder="أدخل كلمة المرور مرة أخرى" v-model="password_confirmation">

                                </div>
                                
                                <span class="error" v-if="v$.password_confirmation.$error"> {{ $t('validation.required') }} </span>

                            </div>

                            
                        </div>

                        <div class="check-boxs">
                            <div class="check">
                                <input type="checkbox"   id="cond" name="terms_and_conditions" v-model="terms_and_conditions">
                                <label for="cond">الموافقة على الشروط والأحكام</label>
                            </div>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up" :disabled="disabled" >إنشاء حساب
                            <div class="spinner-border" role="status" v-if="disabled">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </button> <!--  type="button" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#codeModal1" -->
                    </div>

                    <div class="reg text-center">
                        <a href="#" class="reg-anchor" data-bs-toggle="modal" data-bs-target="#loginModal">بالفعل لديك حساب؟ <span>تسجيل دخول</span></a>
                    </div>
                </form>



            </div>
          </div>
        </div>

    </div>


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
import axios from 'axios'
import { mapState , mapMutations , mapGetters } from 'vuex'


import useValidate from "@vuelidate/core"
import { required } from "@vuelidate/validators"

import VOtpInput from "vue3-otp-input";



export default {
    data(){
        return{
            dialog: false,

            v$ : useValidate(),
            name : '',
            phone : '',
            email : '',
            password : '',
            password_confirmation : '',
            terms_and_conditions : false,
            disabled : false,
            regModal : false,
            activeCodeModal : false,

            activeModal : true,
            device_type : 'web',
            method : 'patch'
            
        }
    },
    validations(){
        return{
            name : { required },
            phone : { required },
            email : { required },
            password : { required },
            password_confirmation : {  required },

        }
    },
    props:{
    },
    computed : {
        ...mapState(["eyeToggle"]),
        ...mapGetters(["eyeToggle"]),
        ...mapState(["passwordFieldType"]),
        ...mapGetters(["passwordFieldType"]),
        ...mapState(["eyeToggle1"]),
        ...mapGetters(["eyeToggle1"]),
        ...mapState(["passwordFieldType1"]),
        ...mapGetters(["passwordFieldType1"])
    },
    methods : {

        // sign up submit
        async signup (){
            this.disabled = true

            
            const fd = new FormData(this.$refs.signUpForm)

            if( this.terms_and_conditions == false ){
                fd.append('terms_and_conditions', 0)
            }else{
                fd.append('terms_and_conditions', 1)
            }

            this.v$.$validate();
            
            await axios.post('sign-up' , fd)
            .then( (res)=>{
                
                if( res.data.key == "success"  ){
                    this.$swal({
                        icon: 'success',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,

                    });

                    this.regModal = false
                    document.querySelector('.modal-backdrop').style.display = "none"

                    setTimeout(() => {
                        this.dialog = true
                    }, 2000);     
                    
                    localStorage.setItem('phone', this.phone)
                    
                    

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

        // active code submit 
        async sendOtp(){

            this.disabled = true
            const fd = new FormData();

            let otpString = JSON.stringify(this.$refs.otpInput.otp.join(""));
            let otpsNumber = JSON.parse(otpString)

            fd.append('code', otpsNumber)

            fd.append('phone', localStorage.getItem('phone'))
            fd.append('device_id', 1234)
            fd.append('device_type', this.device_type)
            fd.append('_method', this.method)


            await axios.post('activate', fd)
            .then( (res)=>{
                if( res.data.key == "success" ){
                    
                    this.$swal({
                        icon: 'success',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,

                    });

                    // // let user = JSON.stringify(res.data.data.user);
                    // let token = res.data.data.user.token
                    // localStorage.setItem('token' , token);
                    // console.log(token)
                    // // localStorage.setItem('user' , user);

                    // localStorage.setItem('IsLoggedIn', true);
                    this.dialog = false

                    // location.reload()
                

                }
                else{
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
            await axios.get(`resend-code?phone=${localStorage.getItem('phone')}`)
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


        ...mapMutations(["switchVisibility"]),
        ...mapMutations(["switchVisibility1"])
    },
    components : {
        VOtpInput,
    },
    mounted(){
        this.regModal = true;

            fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => sessionStorage.setItem('device_id', data.ip))
            .catch(error => console.error(error));

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
}
</script>

<style lang="scss">
.v-overlay{
    z-index:11 !important
}
.swal2-container{
    z-index: 9999999;
}
.position-relative {
  position: relative;
}
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  &:focus{
    border: 1px solid #ccc;
  }
}

.otp-input.is-complete {
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}

.v-overlay__content{
    width: 65% !important;
}
.v-card{
    padding: 30px 60px  !important;
    align-items: center !important; 
}
</style>