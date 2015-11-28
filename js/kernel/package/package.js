function packages(packages){
	if (global.registrPackage[packages] == undefined){
        global.registrPackage[packages] = 0;
        window[packages] = new Object();
        return true;
    } else {
      	return false;
    }
}