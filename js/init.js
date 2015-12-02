var elem = document.getElementById('message');
imports({
	"supports_html" : "/js/src/supports/supports_html5.js",
	"views" : "/js/src/views/views.js"
},function(){	
    if(supports_html.LocalStorage){
    	views.Set("ru","test.html",{
    		test : "te",
    		game : "gg"
    	},"message");
    } else {

    }	
},err);



