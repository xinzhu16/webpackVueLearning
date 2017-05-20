<template>
    <div>
        <p>{{msg}}</p>
        <input v-model="msg">
<<<<<<< HEAD
        <slot>
            ddddddd
        </slot>
=======
        <p>{{prop}}</p>
        <p @click="communication" id="d2">{{counter}}</p>
>>>>>>> 6a4ac26b705a92592b1dfbcc4d20efba5452fb88
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