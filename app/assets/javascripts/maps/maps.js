// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


function getAdress(url, bak) {
	var api = '/maps/getAdress';
	$.get(api, {url: url}, function(data) {
	
		if (data && data[0]) {
			bak(data[0]);	
		}
	});

}

function addDrawOverlay(map, adress) {
	adress.content = '<div class="overlay">' + adress.text + '</div>';
	delete adress.text;

	map.drawOverlay(adress);
}


function get_pro_list() {
	return pro_list ? pro_list : [];
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

    	var addM = function(data) {
    		var adress = {
		    	lat: data.latitude,
		    	lng: data.longitude,
		    	text: name + '<br/>' + data.more
		    };
		    addDrawOverlay(map, adress);	

    	}

    	getAdress(item.url, addM);
    });

    
});

