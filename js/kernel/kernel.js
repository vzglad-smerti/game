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
            "use strict";
        	if (_.expansion[name] == undefined){
        		_.expansion[name] = {};
        		return _.expansion[name];
    		} else {
 				console.warn("Конфликт имён " + name);
 				return false;
    		}
    	},
    	load : function(name){
            "use strict";
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
            "use strict";
            var a = decodeURI(url).split("]||[");
            return {
                modules : a[0],
                location: a[1],
                data:     a[2]
            }
        },

        start : function(router,rd){
            var mmm = router.modules;
            if (rd[mmm] != undefined){
              mmm = rd[mmm];
            }
           mmm = mmm.replace(new RegExp("/",'g'),"")
            _.modules.load(mmm);
            _.modules[mmm].init(router.location,router.data);
        },

        hr : function(url,rd){
            url = $(url).attr('value')
            _.router.start(_.router.parseURL(url),rd); 
            history.pushState(false, false, url);
        }
    }

};