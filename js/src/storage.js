storage = {
	Set : function(key,value){
		try {
  			localStorage.setItem(key, value);
		} catch (e) {
  			if (e == QUOTA_EXCEEDED_ERR) {
   				this.Clear();
   				localStorage.setItem(key, value);
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