(function(_){var m = _.expansion.name("router");if(m){

        m.parseURL = function(url){
            "use strict";
            var a = decodeURI(url).split("]||[");
            return {
                modules : a[0],
                location: a[1],
                data:     a[2]
            }
        }

        m.start = function(router,rd){
            var mmm = router.modules;
            if (rd[mmm] != undefined){
              mmm = rd[mmm];
            }
           mmm = mmm.replace(new RegExp("/",'g'),"")
            _.modules.load(mmm);
            _.modules[mmm].init(router.location,router.data);
        },

        m.hr = function(url,rd){
            url = $(url).attr('href')
            m.start(m.parseURL(url),rd); 
            history.pushState(false, false, url);
            return false;
        }
    
}})(_);