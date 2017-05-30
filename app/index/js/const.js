/**
 * Created by Administrator on 17/5/24.
 */
var A =1;
var B = 2;
var obj = {};
var Top = function(){
    this.age = 9;
    this.friends = ['bob']
}
var Person = function () {
    this.name='human'
};
Person.prototype = new Top();
var person1 = new Person();
person1.friends.push('Jhon');
person1.age = 5;
export {A,Person,obj}
export default B;