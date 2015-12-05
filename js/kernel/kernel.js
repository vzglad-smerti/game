var _ = {
    
    modules : {
    	name : function(name){
            "use strict";
        	if (_.modules[name] == undefined){
        		_.modules[name] = {};
        		return _.modules[name];
    		} else {
 				console.warn("Конфликт имён " + name);
                return false;
    		}
    	},
    	load : function(name){
            "use strict";
            if (_.modules[name] == undefined){
    		  $.ajax({
  				  url: "/js/modules/"+name+"/"+name+".js",
  				  async: false
 			    }).responseText;
            } else {
                console.log("плагин "+name+" загружен ранее. Не чего страшного");
                return false;
            }
            return _.modules[name];
    	}
    },

    expansion : {
    	name : function(name){
        	if (_.expansion[name] == undefined){
        		_.expansion[name] = {};
        		return _.expansion[name];
    		} else {
 				console.warn("Конфликт имён " + name);
 				return false;
    		}
    	},
    	load : function(name){
            if (_.expansion[name] == undefined){
    		$.ajax({
  				url: "/js/kernel/expansion/"+name+"/"+name+".js",
  				async: false
 			}).responseText;
            } else {
                console.log("расширение "+name+" загружено ранее. Не чего страшного");
                return false;
            }
            return _.expansion[name];
    	}
    },

    
    

};