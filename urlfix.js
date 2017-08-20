//exactly matches fb redirects
const pattern_0 = "https://l.facebook.com/l.php?u=";
//matches stuff like ?source=...
const pattern_1 = /[^\w]source/g;
//matches sutff like utm_something=...
const pattern_2 = "utm";
function fix_urls() {
    var anchors = document.getElementsByTagName("a");
    filter_0(anchors);
}

function filter_0(anchors) {
    //makes array
    anchors = [...anchors];
    //var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
    //cout("trying " + timeStampInMs + " " +Date.now());
    relevant = anchors.filter((anchor) => {anchor.href.indexOf(pattern_0) === 0});
    cout("relevant built, size = "+relevant.length);
    relevant.forEach((anchor) => {
        if(null != anchor.onclick) {
            anchor.onmouseover();
        }
        anchor.setAttribute('onclick','#');
        anchor.setAttribute('onmouseover','#');
        anchor.setAttribute('tabindex','#');
        anchor.setAttribute('target','#');
        anchor.setAttribute('rel','#');
        anchor.setAttribute('href',clean_url(anchor.href));
        cout("cleaned link: "+anchor.href);
    });
}

function clean_url(url) {
    var loc_source = pattern_1.exec(url);
    if(loc_source) {
        url = url.substring(0,loc_source);
    }

    loc_utm = url.indexOf(pattern_2);
    if(loc_utm != -1) {
        url = url.substring(0,loc_utm);
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