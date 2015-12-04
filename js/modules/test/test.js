(function(_){var m = _.modules.name("test");if(m){
        
        m.alert = function(){
                alert("test");
        }

        m.init = function(location, data){
        		switch(location){
        			case "click":
        				console.info(location);
        			break;

        			case "test":
        				console.info(data);
        			break;
        		}
                
        }

}})(_);