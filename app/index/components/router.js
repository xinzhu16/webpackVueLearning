var arrRouter = ['boxModel','centerAlign','debounce','Favlist','flex','nextTick',
    'nthChild','prototype', 'slot','temp','transition', 'BFC'];
var routers = [{'path':'',redirect:'Favlist'}];
routers.push.apply(routers,arrRouter.map(function(item)
{return {'path':item,component:resolve=>require(['./'+item],resolve)}}));
console.log(routers);
export default {
    router:routers
}