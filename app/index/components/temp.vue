<template>
    <div class="temp">
        <p>aaaa{{message2}}</p>
        <input v-model="message2">
    </div>
</template>

<script>
    export default{
        data : function(){
            return {
                message2:'组件测试'
            }
        }
    }
//    vm.message2 = 'nextTick';
//    console.log(vm.$el.textContent);
</script>