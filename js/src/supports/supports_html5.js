if (packages("supports_html")){
imports([
	"/js/src/espionage/espionage.js"
], 
function (){		
	
	supports_html.LocalStorage = function (){
		if ('localStorage' in window && window['localStorage'] !== null){
			return true;
		} else {
    		return false;
  		}
	};

	supports_html.Cookie = function(){

			return true;

	};

	supports_html.WebRTC = function (){
		var RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;
    
        if(!RTCPeerConnection){
           var win = iframe.contentWindow;
           RTCPeerConnection = win.RTCPeerConnection
              || win.mozRTCPeerConnection
              || win.webkitRTCPeerConnection;
        }    

		if (!RTCPeerConnection){
			return false;
		} else {
			return true;
		}
	};

	
}, err);
} else {
	err("Пакет supports_html уже создан");
}