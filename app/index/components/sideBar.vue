<template>
    <div class="side-bar">
        <ul>
            <li v-for="item in items">
                <router-link  :to="item" key="item">{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="sass">
    .side-bar
        background: cadetblue
</style>

<script>
    var arr = ["temp","Favlist","nextTick","centerAlign","BFC"];
    export default{
        data(){
            return {
                items:arr
            }
        }
    }
</script>