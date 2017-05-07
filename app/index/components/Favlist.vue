<template>
    <div>
        <div v-for="n in 10">{{msg}}</div>
        <a href="./index.html">test</a>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    html{
        background: blue;
    }
</style>