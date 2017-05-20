<template>
    <div>
        <p>{{msg}}</p>
        <input v-model="msg">
        <slot>
            ddddddd
        </slot>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:'temp2'
            }
        }
    }
</script>