<template>
    <!-- Img Upload Modal -->
    <div class="modal fade" id="imgModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="content-model-me">

                <div class="modal-header">
                <h2 class="section-title"> {{ $t('common.uploadImage') }} </h2>
                </div>

                <form action="" class="modal-form" ref="uploadForm">
                    <div class="modal-body">

                        <div class="upload-img my-4">
                            <input type="file" name="" accept="image/*" id="imgUpload" class="hidden-input img-upload-input" @change="uploadPanner">
                            <label for="imgUpload" class="label-img lg mx-auto">
                                <img :src="camSrc" alt="" >
                            </label>
                            <div class="img-upload-show"></div>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="main-btn md up" type="button" data-bs-toggle="modal" data-bs-target="#doneModal" data-bs-dismiss="modal" aria-label="Close" @click.prevent="uploadAds()"> {{ $t('common.sendRequest') }} </button>
                    </div>

                </form>

            </div>
        </div>
        </div>
    </div>


    <!-- done modal  -->
    <div class="modal fade done" id="doneModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <div class="content-model-me">

                <div class="modal-header">
                  <h2 class="section-title"> {{ $t('common.sendSuc') }} </h2>
                </div>

                <div class="modal-body">

                    <img :src="done" alt="" class="done-img">

                </div>

                <div class="modal-footer">
                    <button class="main-btn md up" type="submit" data-bs-toggle="modal" data-bs-target="#doneModal" data-bs-dismiss="modal" aria-label="Close"> {{ $t('common.finish') }} </button>
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
            camSrc : require('../../assets/imgs/photo-camera.png'),
            done : require('../../assets/imgs/done.gif')
        }
    },
    methods : {
        uploadPanner(){
            let reader = new FileReader();
            reader.onload = (e) => {
                this.camSrc = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        },


        async uploadAds(){
            const fd = new FormData()
            fd.append('image', this.camSrc)
            await axios.post('posts', fd)
            .then( (res)=>{
                console.log(res)
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