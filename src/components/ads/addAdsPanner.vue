<template>
    <!-- Img Upload Modal -->
    <div class="modal fade" v-show="adPanner" id="imgModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="content-model-me">

                <div class="modal-header">
                <h2 class="section-title"> {{ $t('common.uploadImage') }} </h2>
                </div>

                <form  ref="uploadForm" @submit.prevent="uploadAds()">
                    <div class="modal-body">

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">تفاصيل الإعلان</label>
                            <textarea class="form-control" name="details" v-model="details" id="exampleFormControlTextarea1" rows="3" placeholder="اكتب هنا"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">السعر</label>
                            <input type="number" name="price" class="form-control" v-model="price" placeholder="يرجى اضافة السعر">
                        </div>

                        <div class="upload-img my-4">
                            <input type="file" name="image" accept="image/*" id="imgUpload" class="hidden-input img-upload-input" @change="uploadPanner">
                            <label for="imgUpload" class="label-img lg mx-auto">
                                <img :src="image" alt="" :class="{wid : widthAll}" >
                            </label>
                            <div class="img-upload-show"></div>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up" :disabled="disabled"  > 
                            {{ $t('common.sendRequest') }} 
                            <div class="spinner-border" role="status" v-if="disabled">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </button>
                    </div>

                </form>

            </div>
        </div>
        </div>
    </div>


    <!-- done modal  -->


    <v-dialog
            v-model="dialog"
            width="auto"
            persistent
            >


            <v-card>

                <div class="d-flex justify-content-end w-100">
                    <button type="button" class="close-model-btn" style="font-size:22px" @click="dialog=false">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </button>
                </div>

                <div class="modal-header">
                  <h2 class="section-title"> {{ $t('common.sendSuc') }} </h2>
                </div>

                <div class="modal-body">

                    <img :src="done" alt="" class="done-img" >

                </div>

            
            </v-card>
        </v-dialog>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            image :null,
            done : require('../../assets/imgs/done.gif'),
            widthAll: false , 
            details : '',
            adPanner : false,
            dialog : false,
            disabled : false
        }
    },
    mounted(){
        this.adPanner = true
    },
    methods : {
        uploadPanner(e){
            // let reader = new FileReader();
            // reader.onload = (e) => {
            //     this.camSrc = e.target.result;
            // };
            // reader.readAsDataURL(event.target.files[0]);

            const file = e.target.files[0];
            this.image = URL.createObjectURL(file);

            console.log(this.image)
            console.log(file)


       
            this.widthAll = true 

        },


        async uploadAds(){
            this.disabled = true
            const fd = new FormData(this.$refs.uploadForm)
            await axios.post('add-banner', fd)
            .then( (res)=>{
                if( res.data.key == "success"  ){


                    this.adPanner = false
                    document.querySelector('.modal-backdrop').style.display = "none"

                        this.dialog = true
                    
                    
                    

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
    }
}
</script>

<style>

</style>