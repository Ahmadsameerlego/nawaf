<template>

    <!-- login component  Modal -->
    <div class="modal fade" v-show="loginModal" id="loginModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <button type="button" class="close-model-btn" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-regular fa-circle-xmark"></i>
            </button>

            <div class="content-model-me">

                <div class="modal-header">
                  <h2 class="section-title"> {{ $t('auth.login') }}  </h2>
                </div>

                <!-- form  -->
                <form action="add-ads.html" class="modal-form" ref="loginForm">
                    <div class="modal-body">

                        <div class="inputs-container">
                            <div class="input-g">
                                <label for="" class="main-label">
                                    {{ $t('auth.phone_mail') }}
                                </label>
                                <div class="main-input">
                                    <input type="text"  class="input-me" :class="{ error : v$.phone_or_email.$error}" :placeholder="$t('auth.phonePlace')" name="phone_or_email" v-model="phone_or_email">
                                </div>
                                <span class="error" v-if="v$.phone_or_email.$error"> {{ $t('validation.required')}} </span>
                            </div>
    
                            <div class="input-g">
                                <label for="" class="main-label">
                                    {{ $t('auth.password') }}
                                </label>
                                <div class="main-input">
                                    <span class="pass-icon main-icon" @click="switchVisibility()">
                                    
                                        <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="!eyeToggle"/>

                                        <font-awesome-icon icon="fa-solid fa-eye" v-else-if="eyeToggle" />
                                    </span>
                                    <input :type="passwordFieldType" class="input-me" :class="{ error : v$.password.$error}" :placeholder="$t('auth.passwordPlace')" name="password" v-model="password">
                                    

                                </div>
                                <span class="error" v-if="v$.password.$error"> {{ $t('validation.required')}} </span>

                            </div>
                        </div>

                        <div class="anchor text-start">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#sendModal" class="forget-anchor"> {{ $t('auth.forgetPass') }} </a>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up" type="submit"  @click.prevent="login()" :disabled="disabled" > 
                            {{  $t('auth.login') }} 
                            <div class="spinner-border" role="status" v-if="disabled">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </button>
                    </div>

                    <div class="reg text-center">
                        <a href="#" class="reg-anchor" data-bs-toggle="modal" data-bs-target="#regModal" data-bs-dismiss="modal" aria-label="Close">
                            {{ $t('auth.donotHaveAcc') }} <span>{{ $t('auth.createAcc') }}</span>
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
    <registerComponent :dataDialog="dataDialog"  />
</template>

<script>

import axios from 'axios'
import { mapState , mapGetters , mapMutations } from 'vuex'

import forgetPass from './forgetPassword.vue'
import activatioCode from './activationCode.vue'
import registerComponent from './regiesterComponent.vue'

import useValidate from "@vuelidate/core"
import { required  } from "@vuelidate/validators"


export default {
    data(){
        return{
            v$ : useValidate(),
            phone_or_email : '',
            password : '',
            device_type : "web",
            disabled : false,
            loginModal : false,
            dataDialog : false
        }
    },

    validations(){
        return{
            phone_or_email : { required },
            password : { required }
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


            this.disabled = true

            this.v$.$validate()
            
            // initialize formData 
            let fd = new FormData( this.$refs.loginForm );

            fd.append('device_id', sessionStorage.getItem('device_id'))
            fd.append('device_type', this.device_type)


            // post with axios
            if( this.v$.$error ){

                await axios.post('sign-in', fd)
                .then( (res)=>{

                    // if success response 
                    if( res.data.key == "success"  ){
                        this.$swal({
                            icon: 'success',
                            title: res.data.msg,
                            timer: 2000,
                            showConfirmButton: false,

                        });


                        this.loginModal = false
                        document.querySelector('.modal-backdrop').style.display = "none"


                        // let user = JSON.stringify(res.data.data.user)
                        // localStorage.setItem('user', user);

                        let token = res.data.data.token
                        localStorage.setItem('token', token)


                        // set the user as logged in 
                        localStorage.setItem('IsLoggedIn', true);


                        location.reload()

                    }

                    else if( res.data.key == "needActive" ){
                        this.$swal({
                            icon: 'error',
                            title: res.data.msg,
                            timer: 2000,
                            showConfirmButton: false,

                        });

                        

                        this.loginModal = false
                        document.querySelector('.modal-backdrop').style.display = "none";

                        setTimeout(() => {
                            this.dataDialog = true
                        }, 2000);

                    }
                    // if failed response 
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
            }else{
                console.log('failed')
            }
        },

        // show password function 
        ...mapMutations(["switchVisibility"])
    },


    mounted(){
            this.loginModal = true
            fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => sessionStorage.setItem('device_id', data.ip))
            .catch(error => console.error(error));


            this.dataDialog = this.dialog
            console.log(this.dialog)
            console.log(this.dataDialog)
    },
    props:{
        dialog : Boolean
    }
}
</script>

<style scoped>
    a{
        color: #333 !important;
    }
</style>
<style >
    .error{
        color:red;
        font-size:12px;
        transition:.3s all;
    }
    .error.errorShow{
        transform: translateX(-10px);
    }
</style>