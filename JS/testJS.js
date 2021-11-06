kkk = (function getSpeedInfo(){
    return Date.now();
})();

window.onload = function dacha(){
    var SpeedInfo = document.getElementById("SpeedTest");
    var loadingTime = new Date().getTime();
    loadingTime -= kkk;
    SpeedInfo.innerHTML += loadingTime + ' milliseconds'

    locationObj = document.location;
    var elem = document.getElementsByClassName("nav-href");
    for (var i = 0; i< elem.length; i++) {
        var lookLink = elem.item(i)
        console.log(lookLink.href);
        if (lookLink.href === locationObj.href) {
            lookLink.classList.add("activeLink")
            console.log("yes");
        }
    }
}

