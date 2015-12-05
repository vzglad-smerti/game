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
            url = $(url).attr('href')
            _.router.start(_.router.parseURL(url),rd); 
            history.pushState(false, false, url);
        }
    },
    storage : {
        Set : function(key,value){
            try {
                localStorage.setItem(key, value);
                return true;
            } catch (e) {
                if (e == QUOTA_EXCEEDED_ERR) {
                   this.Clear();
                    localStorage.setItem(key, value);
                    return true;
                } else {
                    console.error(e);
                }
            }
        },
        Get : function(key){
            return localStorage.getItem(key);
        },
        Del : function(key){
            localStorage(key);
        },
        Clear : function(){
            localStorage.clear();
        }
    },
    
    views : {
        cache_level_1 : {},
        cache_level_2 : {},
        cache_level_3 : {},
        cache_level_4 : {},
        Get : function(lang_json_url, views_url, arr, divId){
            var k = lang_json_url+views_url;
            
            
            if(this.cache_level_1[k] != undefined){
                console.info("views cache");
                var html = this.cache_level_1[k];
            } else {
                var lang_json;
                var views_source;
                
                if (this.cache_level_3[lang_json_url] != undefined){
                    lang_json = this.cache_level_3[lang_json];
                }else{
                    lang_json = $.ajax({url: lang_json_url, async: false}).responseText;
                }

                if(this.cache_level_4[views_url] != undefined){
                    views_source  = this.cache_level_4[views_source];
                }else{
                    views_source  = $.ajax({url: views_url, async: false}).responseText;
                }
                    
                   
                
                
                views_source = views_source.replace(/\s+/g,' ');
               

                var html = this.compile(lang_json, views_source);
                
                
                this.cache_level_1[k] = html;
            }

            for (var key in arr) {
                html = html.replace(new RegExp("{{."+key+"}}","g"), arr[key])
            }

            var ifs = html.match(/<if>(.*?)<\/if>/g);
            if (Array.isArray(ifs)){
                ifs.forEach(function(item) {
                    var logik = item.match(/<logik>(.*?)<\/logik>/g);
                    logik  = logik[0];
                    logik  = logik.replace('<logik>','');
                    logik  = logik.replace('</logik>','');


                    var block_if = item.match(/<\/logik>(.*?)<else>/g);
                    block_if    = block_if[0];
                    block_if    = block_if.replace('<\/logik>',' ');
                    block_if    = block_if.replace('<else>',' ');

                    var block_else = item.match(/<else>(.*?)<\/if>/g);
                    block_else  = block_else[0];
                    block_else  = block_else.replace('<else>',' ');
                    block_else  = block_else.replace('<\/if>',' ');
                
                    var inners;
                    eval("if("+logik+"){inners='"+block_if+"'}else{inners='"+block_else+"'}");
                
                    html = html.replace(new RegExp(item,"g"), inners)
                });
            }

            $(divId).html(html);

        },

        compile : function(lang_json, html){
           lang = JSON.parse(lang_json);
            for (var key in lang) {
                html = html.replace(new RegExp("<locale>"+key+"</locale>","g"), lang[key]);
            }
 
            var css = html.match(/css@(.*?)@css/g);
            if (Array.isArray(css)){
                css.forEach(function(item) {
                    item = item.replace("css@","");
                    item = item.replace("@css","");
                    if(_.views.cache_level_2[item] == undefined){
                         _.views.cache_level_2[item] = $.ajax({url: item, async: false}).responseText;
                    }
                    html = html.replace("css@"+item+"@css", '<style>'+_.views.cache_level_2[item]+'</style>');
                });
            }
            return html;
        }
    }

};