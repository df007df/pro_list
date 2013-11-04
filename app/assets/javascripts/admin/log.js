//= require_tree ./common/



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
		var logListUrl = '/admin/log/list/' + pro.id;
		var trTmp = ich.log_list_tr({name: pro.name, url: pro.url, logListUrl: logListUrl})
		$('#log_trend tbody').append(trTmp);
	},

	renderSparkline: function() {

		HelpSparkline.base();

	}


};


var loglist = loglist || {};


loglist.init = function(hostUrl) {
	var callback = function(logs) {
		loglist.renderLog(logs);
	};

	rows = rows;
	Admin.api.getLogList(hostUrl, callback, rows);

};

loglist.renderLog = function(logs) {

	_.each(logs, function(log) {

		console.log('log', log);

		var text = ich.log_item(log);
		$('#log_list').append(text);
	});

};
