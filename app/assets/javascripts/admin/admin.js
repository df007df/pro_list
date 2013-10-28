
//= require_tree .
//= require_tree ./../easy-pie-chart

var Dashboard = Dashboard || {};


Dashboard.getPros = function(bak) {
	return bak(pro_list ? pro_list : []);
};

Dashboard.log = {

	init: function() {

		var bak = function(pros) {
			_.each(pros, function(pro) {
				Dashboard.log.fetchPro(pro)
			});
			Help.tableqs.init($('#log_trend tbody'));
		}

		Dashboard.getPros(bak);
	},


	fetchPro: function(pro) {
		var trTmp = ich.log_list_tr({name: pro.name, url: pro.url})
		$('#log_trend tbody').append(trTmp);
	},

	renderSparkline: function() {

		HelpSparkline.base();

	}


};



Dashboard.checkfunction = {

	init: function() {
		var bak = function(pros) {
			_.each(pros, function(pro) {
				Dashboard.checkfunction.addStatusPanel(pro)
			});

			Help.easypie.bind($('#checkfunction .health_status'));
		}

		Dashboard.getPros(bak);
	},


	addStatusPanel: function(pro) {
		var trTmp = ich.healthStatus({name: pro.name})
		$('#checkfunction').append(trTmp);
	}


};




$(function() {
	Dashboard.log.init();

	Dashboard.checkfunction.init();
});
	
