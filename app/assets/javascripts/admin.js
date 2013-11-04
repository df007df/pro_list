//= require_tree ./admin/common
//= require_tree ./easy-pie-chart



Dashboard.checkfunction = {

	init: function() {
		var bak = function(pros) {
			_.each(pros, function(pro) {
				Dashboard.checkfunction.addStatusPanel(pro)
			});

			Help.easypie.bind($('#checkfunction .health_status'));
			Dashboard.checkfunction.eachCheck();
		}

		Dashboard.getPros(bak);
	},


	addStatusPanel: function(pro) {
		var trTmp = ich.healthStatus({name: pro.name, url: pro.url})
		$('#checkfunction').append(trTmp);
	},

	eachCheck: function() {
		var _this = this;
		$('#checkfunction .health_status').each(function() {
			var url = $(this).data('url')
				obj = $(this);

			_this.checkStatus(url, obj);	

		});

	},

	checkStatus: function(url, obj) {
		var _this = this;
		var bak = function(data) {
				
			_this.checkStatusToShow(obj, data);	
		};	

	    var error = function() {
			_this.checkStatusToShow(obj, null);
		};

		Admin.api.getMcheckfunction(
			url, 
			bak,
			error
		);


	},

	checkStatusToShow: function(obj, data) {
		var errors = [];
		if (data && _.size(data)) {

			_.each(data, function(item) {
				if (item.error) {
					errors.push(item.error);
				}
			});


			this.showErrorList(obj, errors);
			this.editPieVal(obj, data, errors);
		} else {
			this.showUnableToConnect(obj);
		}

	},


	_getShowListObj: function(obj) {

		return obj.closest('.box').find('.status_show');
	},

	editPieVal: function(obj, data, errors) {
		var errorsCount = _.size(errors),
		dataCount = _.size(data),
		val = 0;
		val = (errorsCount / dataCount * 100).toFixed(1);
		obj.data('easyPieChart').update(val);
	},

	showErrorList: function(obj, errors) {
		var notice = this._getShowListObj(obj).empty();
	
		_.each(errors, function(val, k) {
		
			notice.append(Help.text.danger((k + 1) + ' ' + val) + '<br/>');	

		});

	},



	showUnableToConnect: function(obj) {
		var notice = this._getShowListObj(obj).empty();
		notice.html(Help.text.danger('bad!'));	
	}


};




$(function() {
	

	Dashboard.checkfunction.init();
});
	
