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

	var tmp = '<a href="javascript:void(0);" class="list-group-item" id="pro_a_' + name + '">' + 
		getDropped() + ' ' +
		name + 
		'</a>';

	$('#prolist').append(tmp);

}

function addProAData(name, adress) {
	$('#prolist #pro_a_' + name).data('adress', adress);	
}

function getProAData(name) {
	$('#prolist #pro_a_' + name).data('adress');	
}

var map = null;

$(function() {

    map = new GMaps({
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
    		$('#prolist #pro_a_' + name).find('span.label').replaceWith(getOnline());
    	
    		var adress = {
		    	lat: data.latitude,
		    	lng: data.longitude,
		    	text: name + '<br/>' + data.more
		    };

		    addProAData(name, adress);
		    addDrawOverlay(map, name, adress);	
    	}

    	var bad = function() {

    	}

    	getAdress(item.url, addM, bad);
    });


    $('#prolist a:not(.active)').off().on('click', function() {
   		var adress = $(this).data('adress');
   		map.setCenter(adress.lat, adress.lng);
    })	

    $('#resetCenter').click(function() {
    	map.setCenter(36.244273, 104.941406);
    });


    
});

