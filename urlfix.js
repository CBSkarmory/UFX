console.log("[UFX] loaded");
const pattern_0 = "https://l.facebook.com/l.php?u=";
function fix_urls() {
    var anchors = document.getElementsByTagName("a");
    for(var i = 0; i < anchors.length; i++) {
        if(anchors[i].href.indexOf(pattern_0) === 0) {
            //anchors[i].onmouseover();
            //alert("found one");
            if(null != anchors[i].onclick) {
                anchors[i].onmouseover();
                //FF
                anchors[i].setAttribute('onclick','#');
                anchors[i].setAttribute('onmouseover','#');
                anchors[i].setAttribute('tabindex','#');
                anchors[i].setAttribute('target','#');
                anchors[i].setAttribute('rel','#');
                console.log("[UFX] cleaned link: "+anchors[i].href);
            }
            
        }
    }
}

//run every 1 second
setInterval(fix_urls, 1000);