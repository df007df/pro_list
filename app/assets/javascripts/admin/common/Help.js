var Help = Help || {};


Help.random = function(max) {

	return parseInt(Math.random()*(max));
};



Help.text = {

	danger: function(val) {
		return '<span class="label label-danger">' + val + '</span>';
	},

	warning: function() {
		return '<span class="label label-warning">' + val + '</span>';
	},

	info: function() {
		return '<span class="label label-info">' + val + '</span>';
	},

	success: function() {
		return '<span class="label label-success">' + val + '</span>';
	}


}

Help.tableqs = {

	_dataKey: {
		today: 'today',
		total: 'total',
		yesterday: 'yesterday',
		qs: 'qs',
		bl: 'bl',
		qsdata: 'qsdata',

	},

	_trobj: null,

	init: function(obj) {

		obj.find('tr').each(function() {
			var url = $(this).data('url');

			Help.tableqs.render($(this), url);

		});	
	},


	render: function(trobj, url) {

		var bak = function(data) {
			var data = Help.tableqs.analyze(data, trobj.data());

			trobj.find('.today').text(data.today);
			trobj.find('.total').text(data.total);
			trobj.find('.yesterday').text(data.yesterday);
			
			trobj.find('.bl').text(data.bl);
			
			if (data.qs > 0) {
				trobj.find('.qs').text('+' + data.qs);
				trobj.find('.qs').addClass('color-red');
			} else if (data.qs == 0) {
				trobj.find('.qs').text(data.qs);
				//trobj.find('.qs').addClass('color-red');	
			} else {
				trobj.find('.qs').text(data.qs);
				trobj.find('.qs').addClass('color-green');
			}

			if (!_.isEmpty(data.qsdata)) {
				Help.sparkline.base(trobj.find('.direct-trend'), data.qsdata);
			}

		};


		Admin.api.getMLog(url, bak);

	},


	analyze: function(data, key) {
		var key = $.extend(this._dataKey, key);
		var data = {
			today: data[key.today],
			total: data[key.total],
			yesterday: data[key.yesterday],

			qs: data[key.qs],
			bl: data[key.bl],
			qsdata: data[key.qsdata]
		}

    	return data;
	}



};


Help.sparkline = {


	_lineColor: [
		'#56bc76',
		'#eac85e',
		'#6a8da7',
		'#e5603b',
		'#fff'
	],

	_fillColor: [
		'rgba(86, 188, 118, 0.1)',
		'rgba(234, 200, 94, 0.1)',
		'rgba(106, 141, 167, 0.1)',
		'rgba(229, 96, 59, 0.1)',
		'rgba(255, 255, 255, 0.1)'
	],

	baseConfig: {
		type: 'line', 
		lineWidth: '2',

		lineColor: '#56bc76', 
		fillColor: false,

		spotRadius: '2',
      
        spotColor: false,
        
		width: '150', 
		height: '30'
	},

	base: function(obj, data, config) {
		if (config) {
			config = $.extend(this.baseConfig, config);	
		} else {
			var index = Help.random(4); 
			config = this.baseConfig;
			config.lineColor = this._lineColor[index];
			config.fillColor = this._fillColor[index];
		}

		obj.sparkline(data, config);
    }
};


Help.easypie = {

	_config: {
		animate: 2000,
		barColor: '#8ecf67',
		trackColor: '#f2f2f2',
		scaleColor: '#dfe0e0',
		lineCap: 'round',
		lineWidth: 4,
		size: 130
	},

	bind: function(obj) {

		this._config.onStep = function(value) {
          this.$el.find('span').text(~~value);
        }

		obj.easyPieChart(this._config);
	}


};


