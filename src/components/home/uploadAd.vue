<template>
      <div class="last-section main-padding">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-6 col-md-0">
                    <div class="last-img">
                        <img :src="adUploaded" alt="">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="last-content">
                        <h2 class="section-title tshadow">هذا النص هو مثال لنص يمكن أن يستبدل</h2>
                        <p class="last-info">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، 
                            حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها 
                            التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة 
                        </p>
                        <p class="last-info">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، 
                            هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                        </p>
                        <a href="add-ads.html" class="main-btn up">ارفع إعلانك</a>
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
    }
}
</script>

<style>

</style>