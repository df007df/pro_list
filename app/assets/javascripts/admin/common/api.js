var Admin = Admin || {};


Admin.auth = '1234';

Admin.api = {

	url: {
		log: '/api/remotemonitoring/servers/log',
	    checkfunction: '/api/remotemonitoring/servers/CheckFunction',
	    loglist: '/api/remotemonitoring/servers/LogList'

	},

	fetch: function(url, data, callback, error) {
		url = url + '/?_auth=' + Admin.auth + '&callback=?';

		$.ajax({
		  async: true,
		  url: url,
		  data: data,
		  success: callback,
		  dataType: 'jsonp',
		  error: error
		});
	},

	getMLog: function(host, callback) {
		this.fetch(host + this.url.log, '', callback);	
	},

	getMcheckfunction: function(host, callback, error) {
		this.fetch(host + this.url.checkfunction, '', callback, error);		
	},

	getLogList: function(host, callback, rows) {
		this.fetch(host + this.url.loglist, {rows: rows}, callback);
	}
    
};