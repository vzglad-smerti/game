(function(_){var m = _.expansion.name("DataBase");if(m){

		var DB = {};
		m.init = function(){
		
			var obj = jQuery.parseJSON($.ajax({
  					url: "/js/kernel/expansion/DataBase/db.json",
  					cache: true,
  					async: false
 				}).responseText);

			jQuery.each(obj, function(i, val) {
      			DB[i] = {};

      			$.each(val,  function(ind, val)   {
					DB[i][val] = ind;
				});
     		});
		}

		m.select = function(table, st){
			if(DB[table] != undefined){
				return DB[table][st];
			} else {
				return false;
			}
		}

		m.set = function(table, st,data){
			if(DB[table] != undefined){
				DB[table][st] = data;
				return true;
			} else {
				return false;
			}
		}

		m.update = function(table, st,data){
			return this.set(table, st,data);
		}
}})(_);