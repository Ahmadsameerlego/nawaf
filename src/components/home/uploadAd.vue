<template>
      <div class="last-section main-padding">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-6 col-md-0">
                    <div class="last-img">
                        <img :src="'https://nawaaaf.com/public'+intro_image" alt="">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="last-content">
                        <h2 class="section-title tshadow"> {{ title_1 }} </h2>
                        <p class="last-info">
                            {{ content_1 }}
                        </p>
                        
                        <router-link to="/uploadAds" @click="preventLogin()" class="main-btn up"> {{ $t('nav.upload') }} </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return{
            adUploaded : require('../../assets/imgs/last-img.png')
        }
    },
    props : {
        content_1 : String,
        title_1 : String,
        intro_image : String,
    },
    methods:{
        preventLogin(){
            if( localStorage.getItem('IsLoggedIn') == "false" || !localStorage.getItem('IsLoggedIn') ){
                this.$swal({
                    icon: 'error',
                    title: 'قم بتسجيل الدخول اولا',
                    timer: 3000,
                    showConfirmButton: false,

                });
            }
        },
    }
}
</script>

<style>

</style>