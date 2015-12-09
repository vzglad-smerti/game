var _i = {
	loader: {
		start: function() {
			$('#preloader').fadeIn();
		},
		stop: function() {
			$('#preloader').fadeOut();
		}
	},

	gameInfo: {
		set: function(money, gold, levels, mail, level, healthValue, healthMax, energyValue, energyMax, ammoValue, ammoMax) {
			$("#header").html('<div class="game_info"><div class="wrap_game no_hover"><div class="line first"><div class="block money"><a><span></span><b> ' + this.moneyConvert(money) + '</b></a></div><div class="block gold"><a><span></span><b>' + gold + '</b></a></div><div class="block levels"><a><span></span><b>' + levels + '</b></a></div><div class="block mail"><a><span><b>' + mail + '</b></span></a></div></div><div class="level" style="width:' + level + '%;"></div><div class="line second"><div class="block health"><a><span></span><b id="healthValue">' + healthValue + '</b><b>/' + healthMax + '</b></a></div><div class="block energy"><a><span></span><b id="energyValue">' + energyValue + '</b><b>/' + energyMax + '</b></a></div><div class="block power"><a><span></span><b id="ammoValue">' + ammoValue + '</b><b>/' + ammoMax + '</b></a></div></div></div>');
		},
		moneyConvert: function(many) {
			var i = -1;
			var manyType = ['К', 'M', 'bn', 'tr'];
			do {
				many = many / 1024;
				i++;
			} while (many > 1024);
			return Math.max(many, 0.1).toFixed(1) + manyType[i];
		}
	}
}