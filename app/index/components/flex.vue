<template>
    <div class="flex">
        <div class="item1 child">
            flex layout1
        </div>
        <div class="item2 child">flex layout2</div>
    </div>
</template>
<script>
    export default{}
</script>

<style scoped lang="scss">
    div{
        border:1px solid black;
    }
    .flex{
        display: flex;
        width:500px;
        height: 500px;
        .child{
            width:100px;
            height:100px;
        }
    }

    .item1{
        flex:0;
        width:100px;
        height:100px;
        animation: myfirst 5s infinite;
    }
    .item2{
        width:100px;
        flex:0;
    }
    @keyframes myfirst {
        0% {background:red;transform:translate(200px,200px)}
        20% {width:300px}
        50% {width:600px}
        100% {width:100px;transform:translate(200px,200px)}
    }
</style>