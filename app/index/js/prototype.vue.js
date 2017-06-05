/**
 * Created by Administrator on 17/5/24.
 */
import {obj} from './const';
import {k} from './underscoreExample'

export default({

})
console.log(k);
obj.name = 'zzc';
console.log(obj.name);
function SuperType(name){
    this.name = name;
    this.colors = ['red','yellow','green'];
    this.proto = 'llll';
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
};
var SubType = function(name,age){
    // SuperType.call(this,name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SuperType;
SubType.prototype.sayAge = function(){
    console.log(this.age);
};
var instance1 = new SubType('Bob',12);
instance1.colors.push('black');
console.log('instance1.proto');
console.log(instance1.proto);
var instance2 = new SubType('Jhon',5);
export { instance1,instance2}

console.log(instance1);
console.log(instance2);