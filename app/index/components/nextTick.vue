<template>
    <div @click="comm">{{message}}</div>
</template>

<script>
    export default{
        data(){
            return {
                message:'vue nextTick测试,打开控制台，点我，看输出'
            }
        },
        methods:{
            comm:function () {
                this.message = 'nextTick 被替换';
                console.log(this.$el.textContent);
                this.message = '替换';
                console.log(this.$el.textContent);
                this.$nextTick(function(){
                    console.log(this.$el.textContent);
                })
            }
        }
    }
</script>