//= require_tree ./common/



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

$(function() {

	if (hostUrl) {
		loglist.init(hostUrl);		
	}
	


});