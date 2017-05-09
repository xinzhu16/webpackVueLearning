<template>
    <div>
        <div v-for="n in 10">{{msg}}</div>
        <a href="./index.html">test</a>
        <div>
            <div class = 'd1'>dddddddddddddddddddddd1</div>
            <div class="d2">llllllllllllllllllllllllllllllllllllll</div>
            <div class="d1">dddddddddddddddddddd</div>
            <div class="d2">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    html{
        /*background: blue;*/
    }
    .d2{
        position: relative;
        background: red;
    }
    .d1{
        position: absolute;
        color:yellow;
    }
</style>