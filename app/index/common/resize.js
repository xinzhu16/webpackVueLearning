/**
 * Created by Administrator on 17/5/29.
 */
(function () {
    var newFontSize = window.getComputedStyle(document.documentElement)['font-size'];
    var fontSizeScale = 16 / parseFloat(newFontSize.replace('px','')) ;
    //获取屏幕大小
    var html = document.documentElement;
    document.addEventListener('DOMContentLoaded', function () {
        resetRem();
        resetScreen();
    });
    window.addEventListener('load', function () {
        setTimeout(resetRem, 300);
        resetScreen();
    });
    window.addEventListener('resize', function () {
        setTimeout(resetRem, 300);
        resetScreen();
    });
    function resetRem() {
        html.style.fontSize = html.clientWidth * 16 / 320 * fontSizeScale + 'px';
    }
    function resetScreen() {
        var height = html.clientHeight || window.innerHeight;
        var width = html.clientWidth || window.innerWidth;
        console.log(height);
        document.querySelector('body').style.height = height + 'px';
        document.querySelector('body').style.width = width + 'px';
    }
    resetRem();
})();