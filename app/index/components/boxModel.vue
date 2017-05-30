<template>
    <div id="parent">
        <div id="child">Content here</div>
    </div>
</template>

<style>
    #parent {position: relative;}
    #child {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 30%;
        width: 50%;
        margin: -15% 0 0 -25%;
    }
    html,body{
        height:100%;
        width:100%;
    }
</style>