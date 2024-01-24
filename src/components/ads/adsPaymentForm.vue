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
                                        <span class="pay-head-txt"> {{ adPrice }} </span>
                                        <span>ر.س</span>
                                    </p>

                                    <p class="pay-head border-bottom pb-3">
                                         قيمة الضريبة المضافة :
                                        <span class="pay-head-txt"> {{ adTax }} </span>
                                        <span>ر.س</span>
                                    </p>

                                    <p class="pay-head ">
                                         الاجمالي :
                                        <span class="pay-head-txt"> {{ adToal }} </span>
                                        <span>ر.س</span>
                                    </p>

                                    <div class="pay-boxs">

                                        <div class="box">
                                            <span class="pay-label d-flex justify-content-center">
                                                <span class="pay-text text-center">
                                                    {{ adText }}
                                                </span>
                                            </span>
                                        </div>
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

                                    <div class="d-flex align-items-center">
                                        <input type="checkbox" class="">
                                        <router-link to="/buyPrivacy" class="mx-3 buy-policy" style="border-bottom:2px solid #0d6efd">
                                            أوافق على سياسة الشراء
                                        </router-link>
                                    </div>

                                    <div class="input-g">
                                        <button type="button" class="main-btn md up mx-auto" data-bs-toggle="modal" data-bs-target="#alertPayModal"  data-bs-dismiss="modal">استمرار</button>
                                    </div>


                                    
                                    <!-- Alert Pay Modal -->
                                    <div class="modal fade done" id="alertPayModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                        <div class="modal- modal-dialog-centered">
                                        <div class="modal-content">

                                            <div class="content-model-me">

                                                <div class="modal-header">
                                                <h2 class="section-title">القيمة غير قابلة للاسترداد</h2>
                                                </div>

                                                <div class="modal-body">

                                                    <img :src="successPay" alt="" class="done-img">

                                                </div>

                                                <div class="modal-footer">
                                                    <button class="main-btn md up" :disabled="disabled" @click.prevent.stop="sendPayment()" data-bs-dismiss="modal"
                                                    >استمرار
                                                    <div class="spinner-border" role="status" v-if="disabled">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                    </button>
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

            adPrice : '',
            paymentWay : '',
            disabled : false,
            adToal : '',
            adText : '',
            adTax : ''
            // disabled : true
        }
    },
    methods:{
        async sendPayment(){
            this.disabled = true
            // const fd = new FormData(this.$refs.paymentForm)
            await axios.get(`test-payment/${localStorage.getItem('random_token')}` , {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == "success" ){
                    this.$swal({
                        icon: 'success',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    this.$router.push('/successAd')
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
                console.log(err)
            } )
        }
    },
    mounted(){
        this.adPrice = localStorage.getItem('ad_price');
        this.adTax = localStorage.getItem('ad_taxt');
        this.adToal = localStorage.getItem('ad_total');
        this.adText = localStorage.getItem('ad_text');

    }
}
</script>

<style>

</style>