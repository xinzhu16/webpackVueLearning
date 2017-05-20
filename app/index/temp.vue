<template>
    <div>
        <p>{{msg}}</p>
        <input v-model="msg">
        <p>{{prop}}</p>
        <p @click="communication">{{counter}}</p>
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
</script>