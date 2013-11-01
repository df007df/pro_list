var Admin = Admin || {};


Admin.auth = '1234';

Admin.api = {

	url: {
		log: '/api/remotemonitoring/servers/log',
	    checkfunction: '/api/remotemonitoring/servers/CheckFunction'

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

	getMLog: function(url, callback) {
		this.fetch(url + this.url.log, '', callback);	
	},

	getMcheckfunction: function(url, callback, error) {
		this.fetch(url + this.url.checkfunction, '', callback, error);		
	}
    
};