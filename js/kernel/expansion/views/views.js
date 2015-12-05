(function(_){var m = _.expansion.name("views");if(m){

        m.cache_level_1 = {};
        m.cache_level_2 = {};
        m.cache_level_3 = {};
        m.cache_level_4 = {};
        
        m.Get = function(lang_json_url, views_url, arr, divId){
            var k = lang_json_url+views_url;
            
            
            if(m.cache_level_1[k] != undefined){
                console.info("views cache");
                var html = m.cache_level_1[k];
            } else {
                var lang_json;
                var views_source;
                
                if (m.cache_level_3[lang_json_url] != undefined){
                    lang_json = m.cache_level_3[lang_json];
                }else{
                    lang_json = $.ajax({url: lang_json_url, async: false}).responseText;
                }

                if(m.cache_level_4[views_url] != undefined){
                    views_source  = m.cache_level_4[views_source];
                }else{
                    views_source  = $.ajax({url: views_url, async: false}).responseText;
                }
                views_source = views_source.replace(/\s+/g,' ');
                var html = m.compile(lang_json, views_source);
                m.cache_level_1[k] = html;
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

        };

        m.compile = function(lang_json, html){
           lang = JSON.parse(lang_json);
            for (var key in lang) {
                html = html.replace(new RegExp("<locale>"+key+"</locale>","g"), lang[key]);
            }
 
            var css = html.match(/css@(.*?)@css/g);
            if (Array.isArray(css)){
                css.forEach(function(item) {
                    item = item.replace("css@","");
                    item = item.replace("@css","");
                    if(m.cache_level_2[item] == undefined){
                         m.cache_level_2[item] = $.ajax({url: item, async: false}).responseText;
                    }
                    html = html.replace("css@"+item+"@css", '<style>'+m.cache_level_2[item]+'</style>');
                });
            }
            return html;
        };
    
}})(_);