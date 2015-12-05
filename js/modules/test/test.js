(function(_){var m = _.modules.name("test");if(m){
        
    m.alert = function(){
                alert("test");
    }

    m.init = function(location, data){	
       var start = new Date();
        _.views.Get("/js/modules/test/json/ru.json", "/js/modules/test/html/test.html", {
        	boll : true
        }, "#message")

        var end = new Date();
        console.info('Скорость ' + (end.getTime()-start.getTime()) + ' мс');

        start = new Date();
        
        _.views.Get("/js/modules/test/json/ru.json", "/js/modules/test/html/test.html", {
        	boll : false
        }, "#message")
        
        end = new Date();
        console.info('Скорость ' + (end.getTime()-start.getTime()) + ' мс');

    }

}})(_);