<template>
    <div class="main">
        <side-bar class="side-bar"></side-bar>
        <router-view class="right"></router-view>
    </div>
</template>
<script>
    import sideBar from "./sideBar";
    export default{
        components:{
            sideBar
        }
    }
</script>
<style lang="scss" scoped>
    .main{
        display:flex;
        .side-bar{
            width:200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .right{
            flex-grow: 1;
        }
    }

</style>