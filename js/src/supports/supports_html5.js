supports_html = {
	LocalStorage : function (){
		if ('localStorage' in window && window['localStorage'] !== null){
			return true;
		} else {
    		return false;
  		}
	},



	WebRTC : function (){
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
	}
}
