function packages(packages){
	if (window[packages] == undefined){
        window[packages] = new Object();
        return true;
    } else {
      	return false;
    }
}