<template>
      <div class="add-ads main-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 mx-auto">
                    <div class="add-form section-style sec-padding">

                        <div class="row">
                            <div class="col-lg-8 col-md-10 col-11 mx-auto">

                                <form action="" ref="paymentForm">
                                    <h2 class="section-title">ارفع إعلانك</h2>
                                    <p class="pay-head">
                                         تكلفة نشر الإعلان :
                                        <span class="pay-head-txt">250.00 ر.س</span>
                                    </p>

                                    <div class="pay-boxs">

                                        <div class="box">
                                            <input type="radio" name="paymentWay" id="visa" value="visa" v-model="paymentWay">
                                            <label for="visa" class="pay-label">
                                                <img :src="visa" alt="" class="pay-img">
                                                <div class="radio-info">
                                                    <span class="pay-name">فيزا</span>
                                                    <p class="pay-text">ادفع باستخدام الفيزا</p>
                                                </div>
                                                <span class="radio-circle"></span>
                                            </label>
                                        </div>

                                        <div class="box">
                                            <input type="radio" name="paymentWay" id="master" value="masterCard" v-model="paymentWay">
                                            <label for="master" class="pay-label">
                                                <img :src="mastercard" alt="" class="pay-img">
                                                <div class="radio-info">
                                                    <span class="pay-name">ماستر كارت</span>
                                                    <p class="pay-text">ادفع باستخدام الماستر كارت</p>
                                                </div>
                                                <span class="radio-circle"></span>
                                            </label>
                                        </div>

                                        <div class="box">
                                            <input type="radio" name="paymentWay" id="mada" value="mada" v-model="paymentWay">
                                            <label for="mada" class="pay-label">
                                                <img :src="mada" alt="" class="pay-img">
                                                <div class="radio-info">
                                                    <span class="pay-name">مدي</span>
                                                    <p class="pay-text">ادفع باستخدام مدي</p>
                                                </div>
                                                <span class="radio-circle"></span>
                                            </label>
                                        </div>

                                    </div>

                                    <div class="input-g">
                                        <button type="button" class="main-btn md up mx-auto" data-bs-toggle="modal" data-bs-target="#alertPayModal"  data-bs-dismiss="modal">استمرار</button>
                                    </div>


                                    
                                    <!-- Alert Pay Modal -->
                                    <div class="modal fade done" id="alertPayModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                        <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">

                                            <div class="content-model-me">

                                                <div class="modal-header">
                                                <h2 class="section-title">القيمة غير قابلة للاسترداد</h2>
                                                </div>

                                                <div class="modal-body">

                                                    <img :src="successPay" alt="" class="done-img">

                                                </div>

                                                <div class="modal-footer">
                                                    <button class="main-btn md up" @click.prevent.stop="sendPayment()" data-bs-dismiss="modal">استمرار</button>
                                                </div>

                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            visa : require('../../assets/imgs/visa.png'),
            mastercard : require('../../assets/imgs/master-card.png'),
            mada : require('../../assets/imgs/mada.png'),
            successPay : require('../../assets/imgs/alert.gif'), 


            paymentWay : '',
            // disabled : true
        }
    },
    methods:{
        async sendPayment(){
            const fd = new FormData(this.$refs.paymentForm)
            await axios.post('posts' , fd)
            .then( (res)=>{
                console.log(res)

                // this.disabled = false
                this.$router.push('/successAd')
                
            } )
            .catch( (err)=>{
                console.log(err)
            } )
        }
    }
}
</script>

<style>

</style>