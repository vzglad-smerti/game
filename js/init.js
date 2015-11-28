/*
if(navigator.userAgent.indexOf('Opera Mini') != -1){
    	
}else if(navigator.userAgent.indexOf('Opera Mobile') != -1){

} else {}	
*/
if (packages("init")){
imports([
		"/js/src/supports/supports_html5.js",
], 
function (){	
		alert(supports_html.WebRTC());
		alert(supports_html.LocalStorage());
		alert(supports_html.Cookie());
}, err);	

} else {
	err("Пакет init уже создан");
}