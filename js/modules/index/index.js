(function(_){var m = _.modules.name("index");if(m){
    var views = _.expansion.load("views");   
    var test = {
    	index : function(){
    		views.Get("/js/modules/index/json/ru.json", 
                "/js/modules/index/html/index.html", {}, "#message");
    	},

        education : function(data){
            switch(data){
                case "start":
                   
                    views.Get("/js/modules/index/json/ru.json", 
                        "/js/modules/index/html/education/start.html", {}, "#message");
                break;
            }

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