<template>
    <div>
        <div v-for="n in arrObj">{{n.name}}</div>
        <a href="./index.html">test</a>
        <input v-model="msg">
        <toggle></toggle>
        <div>
            <div>
                <temp></temp>
            </div>
            <div id="2222">
                <temp2>
                    <!--<p>slot测试</p>-->
                </temp2>
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
        <nth-child></nth-child>
        <center-align></center-align>
        <flex></flex>
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
    import boxModel from './boxModel';
    import kk from '../underscoreTemplate/input';
    import centerAlign from './centerAlign';
    import flex from './flex'
    export default {
        data () {
            return {
                msg: 'Hello World!',
                arr: [1,2,3],
                arrObj:[{data:1,name:'z'}],
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
            'nthChild':nthChild,
            'centerAlign':centerAlign,
            'flex':flex
        },
        methods:{
            getComm:function () {
                this.counter+=1;
            }
        }
    }
    console.log(obj);
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