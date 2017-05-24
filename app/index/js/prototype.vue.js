/**
 * Created by Administrator on 17/5/24.
 */
export default({

})
function SuperType(name){
    this.name = name;
    this.colors = ['red','yellow','green'];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
};
var SubType = function(name,age){
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
var instance2 = new SubType('Jhon',5);
export { instance1,instance2}