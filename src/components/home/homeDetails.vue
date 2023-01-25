<template>
      <div class="facts-section main-padding">
        <div class="container">
            <h2 class="section-title tshadow">هذا النص هو مثال لنص يمكن أن يستبدل</h2>
            <p class="facts-info">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى
            </p>

            <div class="row">
                <div class="col-md-9 mx-auto">

                    <div class="facts-cards">
                        <div class="fact-card">
                            <img class="fact-img" :src="dat1" alt="">
                            <p class="facts-num">1200+ مستخدم</p>
                        </div>
        
                        <div class="fact-card">
                            <img class="fact-img" :src="dat2" alt="">
                            <p class="facts-num">1600+ كود خصم</p>
                        </div>
        
                        <div class="fact-card">
                            <img class="fact-img" :src="dat3" alt="">
                            <p class="facts-num">1600+ إعلان</p>
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
    }
}
</script>

<style>

</style>