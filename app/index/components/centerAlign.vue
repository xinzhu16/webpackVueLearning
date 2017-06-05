<template>
    <div>
        <div class="parent">
            <div class="child">居中</div>
        </div>
        <div class="pos">
            <div>absolute+position布局</div>
        </div>
        <div class="parent2">
            <div class="left">
                <p>left</p>
            </div>
            <div class="right">
                <p>right</p>
                <p>right</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
    .parent{
        display: table-cell;
        vertical-align: center;
        width:100px;
        height:100px;
        text-align:center;
    }
     .parent2 {
         display: flex;
        .left {
             width: 100px;
             margin-left: 20px;
         }
        .right {
            flex: 1;
        }
     }

</style>
<script>
    export default{}
</script>