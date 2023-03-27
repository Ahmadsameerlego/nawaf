<template>
      <div class="facts-section main-padding">
        <div class="container">
            <h2 class="section-title tshadow"> {{ title_2 }} </h2>
            <p class="facts-info">
                {{ content_2 }}
            </p>

            <div class="row">
                <div class="col-md-9 mx-auto">

                    <div class="facts-cards">
                        <div class="fact-card">
                            <img class="fact-img" :src="intro_user_image" alt="">
                            <p class="facts-num"> {{ users_num }} </p>
                        </div>
        
                        <div class="fact-card">
                            <img class="fact-img" :src="intro_advertiser_image" alt="">
                            <p class="facts-num"> {{ advertisers_num }} </p>
                        </div>
        
                        <div class="fact-card">
                            <img class="fact-img" :src="intro_advertiserment_image" alt="">
                            <p class="facts-num"> {{ advertisement_num }} </p>
                        </div>
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
            dat1 : require('../../assets/imgs/facts1.png'),
            dat2 : require('../../assets/imgs/facts2.png'),
            dat3 : require('../../assets/imgs/facts3.png'),
        }
    },
    props : {
        intro_advertiser_image : String,
        intro_advertiserment_image : String,
        intro_user_image : String,
        title_2 : String,
        content_2 : String,
        advertisers_num : String,
        advertisement_num : String,
        users_num : String,
    }
}
</script>

<style>

</style>