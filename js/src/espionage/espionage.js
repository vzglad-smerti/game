if (packages("espionage")){
imports([
	"/js/GitHub/vzglad-smerti/get_ip/GetIp.js"
], err);

		espionage.GetIp(function(ip){

        if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)){
            console.log("Локальный ip:" + ip);
		}else if (ip.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/)){
            console.log("IPv6 адрес:"+ip);
		}else{
			console.log("Публичный ip:"+ip);
		}

        });

		//alert(supports_html.LocalStorage());


} else {
	err("Пакет init уже создан");
}