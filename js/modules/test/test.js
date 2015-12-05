(function(_){var m = _.modules.name("test");if(m){
        
    m.alert = function(){
                alert("test");
    }

    m.init = function(location, data){	
       var views = _.expansion.load("views");
       

        views.Get("/js/modules/test/json/ru.json", "/js/modules/test/html/test.html", {
        	boll : true
        }, "#message");

        views.Get("/js/modules/test/json/ru.json", "/js/modules/test/html/test.html", {
        	boll : false
        }, "#message");
        



    }

}})(_);