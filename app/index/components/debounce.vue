<template>
    <div>
        <button @click="debounce">debounce</button>
    </div>
</template>
<script>
    export default{
        methods:{
            debounce:(function () {
                var k = 100;
                console.log(100);
                return function () {
                    console.log('不在输出k')
                }
            })()
        }
    }
</script>