var Admin = Admin || {};


Admin.auth = '1234';

Admin.api = {

	url: {
		log: '/api/remotemonitoring/servers/log'

	},

	fetch: function(url, data, callback) {
		url = url + '/?_auth=' + Admin.auth + '&callback=?';

		$.ajax({
		  async: true,
		  url: url,
		  data: data,
		  success: callback,
		  dataType: 'jsonp'
		});
	},

	getMLog: function(url, callback) {
		this.fetch(url + this.url.log, '', callback);	
	}
    
};