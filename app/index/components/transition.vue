<template>
    <div>
        <button @click="show=!show">toggle</button>
        <transition name="fade">
            <p v-if="show">show</p>
            <p v-else>not show</p>
        </transition>

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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>