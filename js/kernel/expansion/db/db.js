(function(_){var m = _.expansion.name("db");if(m){

		_.log.set("info", "DataBase загружен");
		
		var BD = {}
		/*
			Продвинутое key = value хранилище
			Всё хранит в озу
		
			--url адрес с конфигом для создания бд в формате
				{
					"table1" : ['st1','st2'],
					"table2" : ['st1','st2']
				}

			--new не обезательный параметр. Если в него что то передать то бд 
			      будет пересоздана. Если не передать то функция проверит не 
			      создавалась ли бд раньше. Если создавалась то просто вернёт 
			      id подключения и все данные что были установленны раньше будут доступны.
			
			вернёт id подключения. Если бд была создана
			ранее то вернёт id который содержит все данные что были до
		*/

		m.init = function(url, n){
			n = n || undefined;
			if (n != undefined){
				this.install(url);
			} else {
				if (BD[url] == undefined){
					this.install(url);
				} 
			}
			return url;	

		};
		/*
			Трансформирует структуру бд из конфига в озу
		*/
		m.install = function(url){
				BD[url] = {};
				DB = BD[url];
				var obj = jQuery.parseJSON($.ajax({
  					url: url,
  					cache: true,
  					async: false
 				}).responseText);

				jQuery.each(obj, function(i, val) {
      				DB[i] = {};

      				$.each(val,  function(ind, val)   {
						DB[i][val] = ind;
					});
     			});
			};
		/*
			--DB id подключения
			--table таблица с которой нужно выбрать значение
			--st столбик с которого выбрать значение
		*/
		m.select = function(Conn,table, st){
			DB = BD[Conn];

			if(DB[table] != undefined){
				return DB[table][st];
			} else {
				return false;
			}
		}

		/*
			--DB id подключения
			--table таблица в которой необходимо записать данные
			--st столбик в который записать данные
			-- data что записать
		*/
		m.set = function(Conn,table, st,data){
			DB = BD[Conn];
			if(DB[table] != undefined){
				DB[table][st] = data;
				return true;
			} else {
				return false;
			}
		}
		/*
			--DB id подключения
			--table таблица в которой необходимо обновить данные
			--st столбик в котором обновить значение
			-- data на что обновить
		*/
		m.update = function(Conn,table, st,data){
			DB = BD[Conn];
			return this.set(table, st,data);
		}
		/*
			--DB id подключения
			--table таблица
			--st столбец в котором необходимо удалить данные
		*/
		m.del = function(Conn,table, st){
			DB = BD[Conn];
			return this.set(DB,table, st, " ")
		}
}})(_);