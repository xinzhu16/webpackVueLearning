<template>
    <div>
        <button @click="show=!show">toggle</button>
        <p v-show="show" class="fade">show</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                show:true
            }
        }
    }
</script>
<style>
    .fade-enter-active{
        transition: opacity .5s;
    }
</style>