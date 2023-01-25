<template>
      <div class="modal fade" id="regModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
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
                            <div class="input-g">
                                <label for="" class="main-label">
                                    اسم المستخدم
                                </label>
                                <div class="main-input">
                                    <input name="username" type="text" class="input-me" placeholder="أدخل اسم المستخدم" v-model="username">
                                </div>
                            </div>

                            <div class="input-g">
                                <label for="" class="main-label">
                                    رقم الجوال
                                </label>
                                <div class="main-input">
                                    <input name="phone" type="number" class="input-me" placeholder="أدخل رقم الجوال" v-model="phone">
                                </div>
                            </div>

                            <div class="input-g">
                                <label for="" class="main-label">
                                    البريد الالكتروني
                                </label>
                                <div class="main-input">
                                    <input name="email" type="email" class="input-me" placeholder="أدخل البريد الالكتروني" v-model="email">
                                </div>
                            </div>
    
                            <div class="input-g">
                                <label for="" class="main-label">
                                    كلمة المرور
                                </label>
                                <div class="main-input">
                                    <span class="pass-icon main-icon"  @click="switchVisibility()">
                                        <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle"/>
                                        <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle" />
                                    </span>
                                    <input name="password" :type="passwordFieldType" class="input-me" placeholder="أدخل كلمة المرور" v-model="password">
                                </div>
                            </div>
    
                            <div class="input-g">
                                <label for="" class="main-label">
                                    تأكيد كلمة المرور
                                </label>
                                <div class="main-input">
                                    <span class="pass-icon main-icon"  @click="switchVisibility1()">
                                        <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle1"/>
                                        <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle1" />
                                    </span>
                                    <input name="confirmPassword" :type="passwordFieldType1" class="input-me" placeholder="أدخل كلمة المرور مرة أخرى" v-model="confirmPassword">
                                </div>
                            </div>
                        </div>

                        <div class="check-boxs">
                            <div class="check">
                                <input type="checkbox"   id="cond" name="acceptCondtions" v-model="acceptCondtions">
                                <label for="cond">الموافقة على الشروط والأحكام</label>
                            </div>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up" type="button" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#codeModal1" >إنشاء حساب</button>
                    </div>

                    <div class="reg text-center">
                        <a href="#" class="reg-anchor" data-bs-toggle="modal" data-bs-target="#loginModal">بالفعل لديك حساب؟ <span>تسجيل دخول</span></a>
                    </div>
                </form>



            </div>
          </div>
        </div>

    </div>
            <!-- after register activation code component  -->
        <regAcCode />

</template>

<script>
import axios from 'axios'
import { mapState , mapMutations , mapGetters } from 'vuex'

import regAcCode from './rejActCode.vue'
export default {
    data(){
        return{
            username : '',
            phone : '',
            email : '',
            password : '',
            confirmPassword : '',
            acceptCondtions : true
        }
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
        async signup (){
            const fd = new FormData(this.$refs.signUpForm)

            // traditional way 
            // fd.append('username' , this.username)
            // fd.append('phone' , this.phone)
            // fd.append('email' , this.email)
            // fd.append('password' , this.password)
            // fd.append('confirmPassword' , this.confirmPassword)
            // fd.append('acceptConditions' , this.acceptCondtions)

            await axios.post('posts' , fd)
            .then( (res)=>{
                console.log(res);
                if( res.status == 201  ){
                    this.$swal({
                        icon: 'success',
                        title: 'login success',
                        text: 'Welcome to home page',
                    });

                }else{
                    this.$swal({
                        icon: 'error',
                        title: 'user not found',
                    });
                }
            } )

            .catch( (err)=>{
                console.error(err)
            } )


            

        },

        ...mapMutations(["switchVisibility"]),
        ...mapMutations(["switchVisibility1"])
    },
    components : {
        regAcCode
    }
}
</script>

<style lang="scss">
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
</style>