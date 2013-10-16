
//= require_tree .

var Dashboard = Dashboard || {};


Dashboard.getPros = function(bak) {
	return bak(pro_list ? pro_list : []);
}

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


}


$(function() {
	Dashboard.log.init();
});
	
