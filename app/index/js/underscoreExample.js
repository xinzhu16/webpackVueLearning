/**
 * Created by xinzhu16 on 17-5-30.
 */
var u = require('underscore');

var m = ['222','333','5555'];
var k = u.filter(m,function(item){return item>333});
export {k}