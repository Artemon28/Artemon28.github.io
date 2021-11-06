kkk = (function getSpeedInfo(){
    return Date.now();
})();

window.onload = function dacha(){
    var SpeedInfo = document.getElementById("SpeedTest");
    var loadingTime = new Date().getTime();
    loadingTime -= kkk;
    SpeedInfo.innerHTML += loadingTime + ' milliseconds'
}


var l = document.getElementsByTagName('a');
l[0].focus();