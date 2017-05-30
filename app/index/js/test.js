/**
 * Created by Administrator on 17/5/25.
 */
function DemoFunction(){
    this.init = function(){
        var func = (function(va){
            this.va = va;
            console.log(this);
            return function(){
                va += this.va;
                return va;
            }
        })(function(va1, va2){
            var va3 = va1 + va2; //干扰代码
            return va1;
        }(1,2));
        console.log(this);
        console.log(func(20));//2

        this.func = func;
        console.log(this.func(100));//3
    }
}
var a = new DemoFunction();
a.init();