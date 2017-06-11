/**
 * Created by Administrator on 17/6/8.
 */
/*这是写排序算法的，面试的时候问到了，可是没写出来，表示很尴尬啊囧，有点急了*/

var bubbleSort = function(arr){
    if(arr){
        if(Object.prototype.toString.call(arr)=='[object Array]'){
            for(let i=arr.length-1;i>0;i--){
                for(let j=0;j<i;j++){
                    if(arr[j]>arr[j+1]){
                        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                    }
                }
            }
            return arr;
        }
    }
};
var arr1 = [3,2,1,4,6,8,23,6,1,4];
console.log(Object.prototype.toString.call(arr1));
console.log(bubbleSort(arr1));
export default bubbleSort;