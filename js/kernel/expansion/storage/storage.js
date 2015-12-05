(function(_){var m = _.expansion.name("storage");if(m){
	m : {
        Set : function(key,value){
            try {
                localStorage.setItem(key, value);
                return true;
            } catch (e) {
                if (e == QUOTA_EXCEEDED_ERR) {
                   this.Clear();
                    localStorage.setItem(key, value);
                    return true;
                } else {
                    console.error(e);
                }
            }
        },
        Get : function(key){
            return localStorage.getItem(key);
        },
        Del : function(key){
            localStorage(key);
        },
        Clear : function(){
            localStorage.clear();
        }
    }
}})(_);