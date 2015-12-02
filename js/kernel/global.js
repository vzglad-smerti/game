var supports = {
	localStorage     : false,
	cookie			 : false,
	webRTC			 : false,

}

var global = {
    registrImports   : {},
    registrJsonP     : {}
}

var ajax;
try {
    ajax = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
    try {
    	ajax = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
    	ajax = false;
    }
}

if (!ajax && typeof XMLHttpRequest!='undefined') {
  ajax = new XMLHttpRequest();
}


function err(msg){
	alert(msg);
}

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
} 