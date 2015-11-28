if (packages("supports_html")){
imports([], 
function (){		
		
	supports_html.LocalStorage = function (){
		if ('localStorage' in window && window['localStorage'] !== null){
			return true;
		} else {
    		return false;
  		}
	};

	
}, err);
} else {
	err("Пакет supports_html уже создан");
}