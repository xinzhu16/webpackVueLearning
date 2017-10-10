<template>
    <div>
        <p>{{msg}}</p>
        <input v-model="msg">
        <slot>
            ddddddd
        </slot>
        <p>{{prop}}</p>
        <p @click="communication" id="d2">{{counter}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                p:this.prop,
                msg:'temp2',
                counter:0
            }
        },
        props:['prop'],
        methods:{
            communication:function () {
                this.counter +=1;
                this.$emit('communication');
            }
        }
    }
    Array.prototype.mySplice = function(){
        var me = this;
        if(arguments.length==0){
            return me;
        }
        var arr = [];
        var temp = [];
        if(arguments.length==1){
            for(var i = arguments[0];i<me.length-1;i++){
                temp.push(me[i]);
            }
            for(var i=me.length-1;i > arguments[0];i--){
                me.pop();
            }
        }
        if(arguments.length>=2){
            for(var i=0;i<arguments[0]+arguments[1];i++){
                if(i<arguments[0]){
                    arr.push(me[i]);
                }else{
                    temp.push(me[i]);
                }
                me.shift();
            }
            for(var i = arguments.length-1;i>=2;i--){
                me.unshift(arguments[i]);
            }
            for(var i=arr.length-1;i>=0;i--){
                me.unshift(arr[i]);
            }
        }
        console.log(me);
        return temp;
    }
    var arr = [1,2,3,4,5,6];
    arr.mySplice(1,2,4,4);
</script>