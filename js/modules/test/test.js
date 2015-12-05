(function(_){var m = _.modules.name("test");if(m){
    var views = _.expansion.load("views");   
    var test = {
    	alert : function(){
        	alert("test");
    	},
    	clik : function(){
    		views.Get("/js/modules/test/json/ru.json", "/js/modules/test/html/test.html", {
        		boll : true
        	}, "#message");
    	}
    }
    


    m.init = function(location, data){	
        if (test[location] != undefined){
        	test[location](data);
        } else {
        	alert("404");
        }

        
    }

}})(_);