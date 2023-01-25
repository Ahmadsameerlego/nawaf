<template>

    <!-- login component  Modal -->
    <div class="modal fade" id="loginModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <button type="button" class="close-model-btn" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-regular fa-circle-xmark"></i>
            </button>

            <div class="content-model-me">

                <div class="modal-header">
                  <h2 class="section-title">تسجيل دخول</h2>
                </div>

                <!-- form  -->
                <form action="add-ads.html" class="modal-form" ref="loginForm">
                    <div class="modal-body">

                        <div class="inputs-container">
                            <div class="input-g">
                                <label for="" class="main-label">
                                    رقم الجوال / البريد الالكتروني
                                </label>
                                <div class="main-input">
                                    <input type="text"  class="input-me" placeholder="أدخل رقم الجوال / البريد الالكتروني" name="email_phone" v-model="email_phone">
                                </div>
                            </div>
    
                            <div class="input-g">
                                <label for="" class="main-label">
                                    كلمة المرور
                                </label>
                                <div class="main-input">
                                    <span class="pass-icon main-icon" @click="switchVisibility()">
                                    
                                        <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle"/>

                                        <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle" />
                                    </span>
                                    <input :type="passwordFieldType" class="input-me" placeholder="أدخل كلمة المرور" name="password" v-model="password">
                                </div>
                            </div>
                        </div>

                        <div class="anchor text-start">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#sendModal" class="forget-anchor">نسيت كلمة المرور؟</a>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up" type="submit"  @click.prevent="login()" data-bs-dismiss="modal" aria-label="Close">تسجيل دخول</button>
                    </div>

                    <div class="reg text-center">
                        <a href="#" class="reg-anchor" data-bs-toggle="modal" data-bs-target="#regModal" data-bs-dismiss="modal" aria-label="Close">
                            ليس لديك حساب؟ <span>إنشاء حساب</span>
                        </a>
                    </div>
                </form>

            </div>
          </div>
        </div>
    </div>


    <!-- forget pass modal  -->
    <forgetPass />

    <!-- activation code / -->
    <activatioCode />

    <!-- register  -->
    <registerComponent />
</template>

<script>

import axios from 'axios'
import { mapState , mapGetters , mapMutations } from 'vuex'

import forgetPass from './forgetPassword.vue'
import activatioCode from './activationCode.vue'
import registerComponent from './regiesterComponent.vue'
export default {
    data(){
        return{
            email_phone : '',
            password : '',
        }
    },

    computed : {
        ...mapState(["eyeToggle"]),
        ...mapGetters(["eyeToggle"]),
        ...mapState(["passwordFieldType"]),
        ...mapGetters(["passwordFieldType"])
    },
    components:{
        forgetPass,
        activatioCode,
        registerComponent
    },
    methods : {
        
        // login function 
        async login(){
            
            // initialize formData 
            let fd = new FormData( this.$refs.loginForm );

            // traditional way 
            // fd.append( 'email_phone' , this.email_phone )
            // fd.append( 'password' , this.password )

            // post with axios
            await axios.post('posts', fd)
            .then( (res)=>{
                console.log(res)

                // if success response 
                if( res.status === 201  ){
                    this.$swal({
                        icon: 'success',
                        title: 'login success',
                        text: 'Welcome to home page',
                    });

                    // save token in the session storage 
                    // sessionStorage.setItem('token', response.data.token);

                    // save the token in vuex 
                    // this.$store.commit('setToken', response.data.token);

                 }
                // if failed response 
                else{
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

        // show password function 
        ...mapMutations(["switchVisibility"])
    }
}
</script>

<style scoped>
    a{
        color: #333 !important;
    }
</style>