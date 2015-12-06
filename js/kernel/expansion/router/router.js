(function(_){var m = _.expansion.name("router");if(m){

        /*
            -- url = текущий урл
                разбивает урл по символу ]||[ 
                в игре урл хранится в таком формате 
                модуль]||[локация]||[переданые данные

        */
        m.parseURL = function(url){
            "use strict";
            var a = decodeURI(url).split("]||[");
            return {
                modules : a[0],
                location: a[1],
                data:     a[2]
            }
        }
        /*
            -- router = урл распарсенный с помощью parseURL
            -- rd = масив с урл для которых автозагрузка модулей работать не должна
               данные этого масива должны быть в формате 
               var rd = {
                    "/" : {
                       modules : "test",
                       location: "index",
                       data:     ""
                    },
                }

            Проверяет нет ли такого модуля в масиве --rd. Если есть то загружает в rout данные из него. 
            В противном случае в rout попадают данные из --router 

            Загружает модуль.
            Визивает функцию init с загруженого модуля.
        */
        m.start = function(router,rd){
            var router_modules = router.modules;
            var rout;
            if (rd[router_modules] != undefined){
              rout = rd[router_modules];
            } else {
              rout = router;
            }
           rout.modules = rout.modules.replace(new RegExp("/",'g'),"")
            var module = _.modules.load(rout.modules);
            _.modules[rout.modules].init(rout.location,rout.data);
        },

        /*
            -- url = принимает урл на который необходимо обновить текущий
            -- rd  = масив с урл для которых автозагрузка модулей работать не должна
                        var rd = {
                            "/" : {
                                modules : "test",
                                location: "index",
                                data:     ""
                            },
                        }

            парсит урл и передаёт его на обработку функции start
            обновляет урл на тот который передали
        */
        m.hr = function(url,rd){
            this.start(this.parseURL(url),rd); 
            history.pushState(false, false, url);
        }
    
}})(_);