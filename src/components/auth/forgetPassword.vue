<template>
      <div class="modal fade" id="sendModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <button type="button" class="close-model-btn" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-regular fa-circle-xmark"></i>
            </button>

            <div class="content-model-me">

                <div class="modal-header">
                  <h2 class="section-title">كود التفعيل</h2>
                </div>

                <form action="" class="modal-form" @submit.prevent="sendCode()" ref="sendCode">
                    <div class="modal-body">
                        <h4 class="form-title">برجاء ادخال رقم الجوال او البريد الالكتروني</h4>

                        <div class="inputs-container">

                            <div class="input-g">
                                <label for="" class="main-label">
                                    رقم الجوال / البريد الالكتروني
                                </label>
                                <div class="main-input">
                                    <input type="email" class="input-me" placeholder="أدخل رقم الجوال / البريد الالكتروني" name="phone_mail" v-model="phone_mail">
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up blabla" type="button" data-bs-toggle="modal" data-bs-target="#codeModal" data-bs-dismiss="modal" aria-label="Close">إرسال</button>
                    </div>

                </form>

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
            phone_mail : ''
        }
    },
    methods :{
        async sendCode(){
            const fd = new FormData(this.$refs.sendCode)

            await axios.post('posts', fd)
            .then( (res)=>{
                console.log(res)

                if( res.status == 201 ){
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
                console.error( err )
            } )
        }
    }
}
</script>

<style>

</style>