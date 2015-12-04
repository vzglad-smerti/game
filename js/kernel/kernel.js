var _ = {
    
    modules : {
    	name : function(name){
        	if (_.modules[name] == undefined){
        		_.modules[name] = {};
        		return _.modules[name];
    		} else {
 				console.warn("Конфликт имён " + name);
                return false;
    		}
    	},
    	load : function(name){
            if (_.modules[name] == undefined){
    		  $.ajax({
  				  url: "/js/modules/"+name+"/"+name+".js",
  				  cache: true,
  				  async: false
 			    }).responseText;
            } else {
                console.log("росширение "+name+" загружено рание. Не чего страшного");
                return false;
            }
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
  				cache: true,
  				async: false
 			}).responseText;
            } else {
                console.log("росширение "+name+" загружено рание. Не чего страшного");
                return false;
            }
    	}
    },

    router : {
        parseURL : function(url){
            var a = decodeURI(url).split("]||[");
            return {
                modules : a[0].replace(new RegExp("/",'g'),""),
                location: a[1],
                data:     a[2]
            }
        }
    }

};