var _ = {
    
    modules : {
    	name : function(name){
        	if (_.modules[name] == undefined){
        		_.modules[name] = {};
        		return _.modules[name];
    		} else {
 				console.log("конфликт имён "+name);
 				return false;
    		}
    	},
    	load : function(name){
    		$.ajax({
  				url: "/js/modules/"+name+"/"+name+".js",
  				cache: true,
  				async: false
 			}).responseText;
    	}
    },

    expansion : {
    	name : function(name){
        	if (_.expansion[name] == undefined){
        		_.expansion[name] = {};
        		return _.expansion[name];
    		} else {
 				console.log("Данное росширение загружено рание. Не чего страшного");
 				return false;
    		}
    	},
    	load : function(name){
    		$.ajax({
  				url: "/js/kernel/expansion/"+name+"/"+name+".js",
  				cache: true,
  				async: false
 			}).responseText;
    	}
    }

};