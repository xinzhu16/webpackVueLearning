<template>
    <div>
        <div v-for="n in arrObj">{{n.name}}</div>
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
                <temp2>
                    <!--<p>slot测试</p>-->
                </temp2>
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
                msg: 'Hello World!',
                arr: [1,2,3],
                arrObj:[{data:1,name:'z'}]
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