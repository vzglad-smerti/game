/*подключает скрипт синхронно*/
function include(url){
  ajax.open('GET', url, false);
  ajax.send(null);
  return  eval(ajax.responseText); 
}

/*
Асинхронно грузит скрипт.
Вызовет onSucces в случае успеха или onError при ошибке

*/
function loadJs(url, onSucces, onError){
  var script = document.createElement('script');
  script.src = url;
   
  script.onerror = function() { 
      onError("Ошибка при загрузке "+url);
  };

  script.onload = function() { 
    onSucces();
  };  
  document.head.appendChild(script);
}

/*
да знаю о том что это адский говнокод.
но браузеры тупых юзеров другой не потдерживают
*/
function imports(arr, onSucces, onError){
  var count = 0;
  var countLoad = 0;
  
  for(var k in arr){
     count++;
  }

  for (var key in arr) {
    countLoad++;
    if(global.registrImports[key] == undefined){
        global.registrImports[key] = 0;
        var script = document.createElement('script');
        script.src = arr[key];
        script.onerror = function() { 
              onError("Ошибка при загрузке "+arr[key]);
        };
        document.head.appendChild(script);

        if (count == countLoad){
            script.onload = function() { 
              onSucces();
            }; 
        }
    } else {
      console.info(arr[key] + " загружен рание");
    }
  }
}

