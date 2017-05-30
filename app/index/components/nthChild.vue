<template>
    <div>
        <div>
            <p>the first</p>
            <div>第二个元素是div</div>
            <p>the second</p>
        </div>
        <div>
            <p>the first</p>
            <p>the second</p>
        </div>
        <div class="triangle-up"></div>
    </div>
</template>

<style>
    p:nth-child(2){
        color:yellow;
    }
    .triangle-up {
        width: 0;
        height: 0;
        border-left:100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 100px solid red;
    }
</style>