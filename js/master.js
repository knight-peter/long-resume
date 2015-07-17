var bar = 0;
var step = "||";
// window.onload = function(){
// 	progress();
// }
function progress() {
    bar = bar + 2;
    step = step + "||";
    var preloader = document.getElementById('preloader');
    document.getElementById("percent").innerHTML = "Long Resume 加载中：" + bar + "%";
    document.getElementById("progressbar").innerHTML = step;
    if (bar <= 98) {
        setTimeout("progress()", 50);
    }else{
		preloader.style.display="none";
    }
}
//监听加载状态改变
document.onreadystatechange = completeLoading;
//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        progress();
    }
}