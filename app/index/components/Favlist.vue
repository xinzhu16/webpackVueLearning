<template>
    <div>
        <div v-for="n in 10">{{msg}}</div>
        <a href="./index.html">test</a>
        <input v-model="msg">
        <div>
            <div class = 'd1'>dddddddddddddddddddddd1</div>
            <div class="d2">llllllllllllllllllllllllllllllllllllll</div>
            <div class="d1">dddddddddddddddddddd</div>
            <div class="d2">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</div>
            <div>
                <temp></temp>
            </div>
            <div id="2222">
                <temp2></temp2>
            </div>
        </div>
    </div>
</template>

<script>
    import temp from './temp';
    import temp2 from '../temp';
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        },
        components:{
            'temp':temp,
            'temp2':temp2
        }
    }
//    new Vue({
//        compoents:{
//            'temp':temp
//        }
//    })
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