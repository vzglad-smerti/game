function imports(arr, onSuccess, onError){

  var count = arrCount(arr);
  var coutLoad = 0;

  if(count == 0){
    onSuccess();
  } else { 
  arr.forEach(function(item) {
    coutLoad++;
	    if (global.registrImport[item] == undefined){
        global.registrImport[item] = 0;
        if (global.scriptReplace[item] != undefined){
            var script = loadJs(global.scriptReplace[item]);
        }else{  
            var script = loadJs(item);
        }
        loadFunc(script,item, count, coutLoad, onSuccess, onError);
      } else {
      	 console.info(item + "	загружен ранее.");
      }
  });
 }
}

function arrCount(arr){
  var count = 0;
  arr.forEach(function(){
    count++;
  });
  return count;
}


function loadJs(url){
  var script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script); 
  return script;
}


function loadFunc(script, url, count, coutLoad, onSuccess, onError){

  script.onerror = function() { 
    onError("Ошибка при импорте пакета" + url);
  };

  script.onload = function() { 
    if(count == coutLoad){
      onSuccess();
    }
  };

}


