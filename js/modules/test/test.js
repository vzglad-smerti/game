(function(_){var m = _.modules.name("test");if(m){
        
        _.expansion.load("DataBase");
        var DB = _.expansion.DataBase;
        DB.init();

        m.select = function(){
        	var login = DB.select("users","login");
        	$("#message").text(login);
        };

        m.set = function(){
        	DB.set("users","login","testData");
        };

        m.update =  function(){
        	DB.update("users","login","testData");
        };



}})(_);