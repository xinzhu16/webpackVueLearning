<template>
    <div>
        <!--<div v-for="n in arrObj">{{n.name}}</div>
        <a href="./index.html">test</a>
        <input v-model="msg">
        <toggle></toggle>
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
        <debounce></debounce>
        <box-model></box-model>
        <nth-child></nth-child>-->
    </div>

</template>

<script>
    import temp from './temp';
    import temp2 from '../temp';
    import zslot from './slot';
    import nextTick from './nextTick';
    import toggle from './transition';
    import nthChild from './nthChild'
    import {instance1,instance2} from '../js/prototype.vue';
    import {A,Person,obj} from '../js/const';
    import v from '../js/const';
    import k from '../js/static';
    import debounce from './debounce';
    import boxModel from './boxModel'
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
            'toggle':toggle,
            'debounce':debounce,
            'boxModel':boxModel,
            'nthChild':nthChild
        },
        methods:{
            getComm:function () {
                this.counter+=1;
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