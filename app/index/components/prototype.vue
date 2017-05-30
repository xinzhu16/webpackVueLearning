<template>
    <div></div>
</template>

<script>
    function SuperType(name){
        this.name = name;
        this.colors = ['red','yellow','green'];
    }
    SuperType.prototype.sayName = function(){
        console.log(this.name);
    };
    function SubType(name,age){
        SuperType.call(this,name);
        this.age = age;
    }
    SubType.prototype = new SuperType();
    SubType.prototype.constructor = SubType;
    SubType.prototype.sayAge = function(){
        console.log(this.age);
    }
    var instance1 = new SubType('Bob',12);
    instance1.colors.push('black');
    instance1.sayName();
    instance1.sayAge();
</script>