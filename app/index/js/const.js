/**
 * Created by Administrator on 17/5/24.
 */
var A =1;
var B = 2;
var Top = function(){
    this.age = 9;
    this.friends = ['bob']
}
var Person = function () {
    this.name='human'
};
Person.prototype = new Top();
var person1 = new Person();
var person3 = new Person();
console.log('没有构造器');
console.log(person1);
console.log(person1.age,person3.age);
person1.friends.push('Jhon');
person1.age = 5;
console.log(person1.age,person3.age);
console.log(person1.friends,person3.friends);
export {A,Person}
export default B;