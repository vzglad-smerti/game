/*
if(navigator.userAgent.indexOf('Opera Mini') != -1){
    	
}else if(navigator.userAgent.indexOf('Opera Mobile') != -1){

} else {}	
*/
if (packages("init")){
imports([
		"/js/src/supports/supports_html5.js",
		"/webRTC/GetIp.js"
], 
function (){	
		init.test = function (){
			alert('6');
		}

        });

		//alert(supports_html.LocalStorage());
}, err);	

} else {
	err("Пакет init уже создан");
}