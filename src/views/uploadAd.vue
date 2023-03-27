<template>
    <loader v-if="loader" />
    <uploadAdForm />
</template>

<script>
import uploadAdForm from '../components/ads/uploadAdsForm.vue';
import loader from '../components/Shared/pageLoader.vue'

export default {
    data(){
        return{
            loader : true
        }
    },
    components:{
        uploadAdForm,
        loader
    },
    mounted(){
        this.loader = false
    }
};
</script>

<style>
</style>