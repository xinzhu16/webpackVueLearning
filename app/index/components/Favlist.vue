<template>
    <div>
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