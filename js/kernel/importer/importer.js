function imports(arr, onError){
  arr.forEach(function(item) {
      ajax.open('GET', item, false);
      ajax.send(null);
      if(ajax.status == 200 || ajax.status == 304) {
        if(ajax.responseText != "") {
          eval(ajax.responseText);
        } else {
          onError("Скрипт пустой");
        }
      }else {
          onError("http status code: "+ajax.status);
      }
  });
}




