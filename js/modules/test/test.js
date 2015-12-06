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
        _.log.set("info", location)
        if (test[location] != undefined){
        	test[location](data);
        } else {
        	_.log.set("error", "Локации: "+location+" нет в модуле test")
        }

        
    }

}})(_);