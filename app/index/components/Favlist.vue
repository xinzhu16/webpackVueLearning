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
                <temp2 :prop="msg" @communication="getComm"></temp2>
                <temp2 :prop="msg" @communication="getComm"></temp2>
                <p>{{counter}}</p>
            </div>
            <div>
                <zslot>
                    <p>llll</p>
                </zslot>
            </div>
        </div>
    </div>
</template>

<script>
    import temp from './temp';
    import temp2 from '../temp';
    import zslot from './slot';
    export default {
        data () {
            return {
                msg: 'Hello World!',
                counter:0
            }
        },
        components:{
            'temp':temp,
            'temp2':temp2,
            'zslot':zslot
        },
        methods:{
            getComm:function () {
                this.counter+=1;
            }
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