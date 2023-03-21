<template>
      <div class="loader">
        <img :src="src" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return{
            src : require('../../assets/imgs/loader.gif')
        }
    }
}
</script>

<style>

</style>