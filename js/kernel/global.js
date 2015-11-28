var global = {
	registrImport    : {},
    registrPackage   : {}
}

global.scriptReplace = {
  "/webRTC/GetIp.js" : "https://raw.githubusercontent.com/vzglad-smerti/get_ip/master/GetIp.js"
}

/*
Всё скрипты которые грузим не через imports
добавляем в регистр. Что бы случайно их не загрузить через imports
*/
global.registrImport["/js/kernel/global.js"] = 0;
global.registrImport["/js/kernel/importer/importer.js"] = 0;
global.registrImport["/js/kernel/package/package.js"] = 0;
global.registrImport["/js/init.js"] = 0;


function err(msg){
	alert(msg);
}