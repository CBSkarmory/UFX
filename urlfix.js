console.log("[UFX] loaded");
const pattern_0 = "https://l.facebook.com/l.php?u=";
function fix_urls() {
    var anchors = document.getElementsByTagName("a");
    for(var i = 0; i < anchors.length; i++) {
        filter_0(anchors, i);
    }
}

function filter_0(anchors, i) {
    if(anchors[i].href.indexOf(pattern_0) === 0) {
        if(null != anchors[i].onclick) {
            anchors[i].onmouseover();
            //FF
            anchors[i].setAttribute('onclick','#');
            anchors[i].setAttribute('onmouseover','#');
            anchors[i].setAttribute('tabindex','#');
            anchors[i].setAttribute('target','#');
            anchors[i].setAttribute('rel','#');
            anchors[i].setAttribute('href',clean_url(anchors[i].href));
            console.log("[UFX] cleaned link: "+anchors[i].href);
        }
    }
}

function clean_url(url) {
    //console.log("[UFX] trying to clean url: " + url);
    loc_utmsrc = url.indexOf("&utm_source");
    if(loc_utmsrc != -1) {
        url = url.substring(0,loc_utmsrc);
    }
    return url;
}

//run every 1 second
setInterval(fix_urls, 1000);