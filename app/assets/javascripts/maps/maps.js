// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var OverlayProints = {};

function getOnline() {
	return '<span class="label label-success">ok</span>';
}

function getDropped() {
	return '<span class="label label-danger">bad</span>';
}


function getAdress(url, success, bad) {
	var api = '/maps/getAdress';
	$.get(api, {url: url}, function(data, status) {

		if (status === 'success' && 
			data && 
			data[0]
		) {
			success(data[0]);	
		} else {
			bad();	
		}

	});

}

function addDrawOverlay(map, name, adress) {
	
	adress.content = '<div class="overlay">' + adress.text + '</div>';
	addProList(name, adress);

	delete adress.text;

	map.drawOverlay(adress);
}

function addProList(key, adress) {
	OverlayProints[key] = adress;
}

function getProList(key) {
	return OverlayProints ? 
		OverlayProints[key] ? OverlayProints[key] : {} : 
		{};
}


function get_pro_list() {
	return pro_list ? pro_list : [];
}



function addProListLi(name) {

	var tmp = '<a href="#" class="list-group-item">' + 
		getOnline() + ' ' +
		name + 
		'</a>';

	$('#prolist').append(tmp);

}


$(function() {

    var map = new GMaps({
		  div: '#mapsdiv',
		  mapType: 'terrain',

		  panControl: false,
		  zoomControl: false,

		  scaleControl: false,
		  streetViewControl: false,



		  lat: 36.244273,
		  lng: 104.941406,

		  zoom: 5
		});

    //map.setCenter(36.244273, 104.941406);

    var pro_list = get_pro_list();



    $.each(pro_list, function(k, item) {
    	var name = item.name;

    	addProListLi(name);

    	var addM = function(data) {
    		var adress = {
		    	lat: data.latitude,
		    	lng: data.longitude,
		    	text: name + '<br/>' + data.more
		    };
		    addDrawOverlay(map, name, adress);	

    	}

    	var bad = function() {
    		
    	}

    	getAdress(item.url, addM, bad);
    });

    
});

