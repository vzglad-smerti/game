var storage = include("/js/src/storage.js");
views = {
	Set : function(lang, vie, arr, divId){
		
		var k = lang+vie;
		var html_return = storage.Get(k);
		
		if (html_return == null){
			alert("no");
			var url = "/json/lang/"+lang+".json";
			ajax.open('GET', url, false);
  			ajax.send(null);
  		
  			if(ajax.status == 200 || ajax.status == 304) {
  				lang = ajax.responseText;
			} else {
				ajax.open('GET', "/json/lang/ru.json", false);
  				ajax.send(null);
  				lang = ajax.responseText;
			}

			ajax.open('GET', "/js/views/"+vie, false);
  			ajax.send(null);
  			html = ajax.responseText;
  		
		
        	lang = JSON.parse(lang);
        	for (var key in lang) {
        		html = html.replace(new RegExp("<locale>"+key+"</locale>","g"), lang[key])
        	}

        	storage.Set(k,html)
        	var htmls = this.arrSet(arr, html);
        } else {
        	var htmls = this.arrSet(arr, html_return);
        }
		
        var elem = document.getElementById(divId);
  		elem.innerHTML = htmls;

	},

	arrSet : function(arr,html){
		for (var key in arr) {
			html = html.replace(new RegExp("<arr>"+key+"</arr>","g"), arr[key])
        }
        return html;
	}
}