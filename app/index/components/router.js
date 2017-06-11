
/**
 * Created by Administrator on 17/6/11.
 */
// import flex from './flex';
// import boxModel from './boxModel';
// import Favlist from './Favlist';
// import centerAlign from './centerAlign';
// import debounce from './debounce';
// import nextTick from 'nextTick';
// import nthChild from 'nthChild';
// import prototype from ''
var arrRouter = ['boxModel','centerAlign','debounce','Favlist','flex','nextTick',
    'nthChild','prototype', 'slot','temp','transition'];
var routers = [{'path':'',redirect:'Favlist'}];
routers.push.apply(routers,arrRouter.map(function(item)
{return {'path':item,component:resolve=>require(['./'+item],resolve)}}));
console.log('ddddddddddddddddd')
console.log(routers);
export default {
    router:routers
}