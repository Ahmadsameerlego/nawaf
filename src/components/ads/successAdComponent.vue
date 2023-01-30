<template>
      <div class="add-ads main-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 mx-auto">
                    <div class="add-form section-style sec-padding">

                        <div class="row">
                            <div class="col-lg-8 col-md-10 col-11 mx-auto">

                                <div class="done-section">
                                    <h2 class="section-title">تم رفع الإعلان بنجاح</h2>

                                    <img :src="successPay" class="done-img my-5" alt="">

                                    <a href="all-ads.html" class="main-btn up md mx-auto">اعلاناتي</a>
                                </div>

                            </div>
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
            successPay :  require('../../assets/imgs/done.gif')
        }
    }
}
</script>

<style>

</style>