<template>
    <div>
        <div v-for="n in 10">{{msg}}</div>
        <a href="./index.html">test</a>
        <input v-model="msg">
        <div>
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
            <next-tick></next-tick>
        </div>
        <toggle></toggle>
    </div>

</template>

<script>
    import temp from './temp';
    import temp2 from '../temp';
    import zslot from './slot';
    import nextTick from './nextTick';
    import toggle from './transition';

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
            'zslot':zslot,
            'nextTick':nextTick,
            'toggle':toggle
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