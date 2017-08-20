//exactly matches fb redirects
const pattern_0 = "https://l.facebook.com/l.php?u=";
//matches stuff like ?source=...
const pattern_1 = /[^\w]source/g
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
            cout("cleaned link: "+anchors[i].href);
        }
    }
}

function clean_url(url) {
    loc_utm = url.indexOf("utm");
    if(loc_utm != -1) {
        url = url.substring(0,loc_utm);
    }
    var loc_source = pattern_1.exec(url);
    if(loc_source) {
        url = url.substring(0,loc_source);
    }
    return url;
}

//uh console out
function cout(str) {
    console.log("[UFX] " + str);
}

cout("loaded");
//run every 4 seconds
setInterval(fix_urls, 4000);