if (packages("cookie")){
imports([], 
function (){  
  alert("test");
}, err);  

} else {
  err("Пакет cookie уже создан");
}