var map;
var geocoder;
function initialize() {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
	    zoom: 10,
	    center: new google.maps.LatLng(42.3581, -71.0636)
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),
	    mapOptions);

	for (var i = addresses.length - 1; i >= 0; i--) {
		name = addresses[i].name;
		plotAddress(addresses[i]);
	};
}

function plotAddress (address) {
	var marker = new google.maps.Marker({
		        map: map,
		        position: new google.maps.LatLng(address.lat,address.lng)
		    });
}

google.maps.event.addDomListener(window, 'load', initialize);