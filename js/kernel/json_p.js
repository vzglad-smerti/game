/*
Пример использования

function ok(data) {
  alert( "Загружен пользователь " + data.name );
}

function fail(url) {
  alert( 'Ошибка при запросе ' + url );
}

// Внимание! Ответы могут приходить в любой последовательности!
json_p("user?id=123", ok, fail); // Загружен
json_p("/badurl.js", ok, fail); // fail, 404
json_p("/", ok, fail); // fail, 200 но некорректный скрипт

*/

function json_p(url, onSuccess, onError) {
  var scriptOk = false;
  var callbackName = 'cb' + String(Math.random()).slice(-6);
  url += ~url.indexOf('?') ? '&' : '?';
  url += 'callback=global.registrJsonP.' + callbackName;
  global.registrJsonP[callbackName] = function(data) {
    scriptOk = true; 
    delete global.registrJsonP[callbackName]; 
    onSuccess(data); 
  };
  function checkCallback() {
    if (scriptOk) return; 
    delete global.registrJsonP[callbackName];
    onError(url);
  }
  var script = document.createElement('script');
  script.onreadystatechange = function() {
    if (this.readyState == 'complete' || this.readyState == 'loaded') {
      this.onreadystatechange = null;
      setTimeout(checkCallback, 0); 
    }
  }
  script.onload = script.onerror = checkCallback;
  script.src = url;
  document.body.appendChild(script);
}