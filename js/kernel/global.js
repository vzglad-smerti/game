var supports = {
	localStorage     : false,
	cookie			 : false,
	webRTC			 : false,

}

var global = {
	registrImport    : {},
    registrPackage   : {},
    registrJsonP     : {}
}


global.scriptReplace = {}

/*
Всё скрипты которые грузим не через imports
добавляем в регистр. Что бы случайно их не загрузить через imports
*/
global.registrImport["/js/kernel/global.js"] = 0;
global.registrImport["/js/kernel/importer/importer.js"] = 0;
global.registrImport["/js/kernel/package/package.js"] = 0;
global.registrImport["/js/init.js"] = 0;


//прости Боб;)
try {
    global.ajax = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
    try {
    	global.ajax = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
    	global.ajax = false;
    }
}

if (!global.ajax && typeof XMLHttpRequest!='undefined') {
  global.ajax = new XMLHttpRequest();
}


function err(msg){
	alert(msg);
}