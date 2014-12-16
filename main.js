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
	var infowindow = new google.maps.InfoWindow({
	    content: '<h1>'+address.name+'</h1>'+
	    	'<h3>METCO Student Enrollment: '+ address.enrollment + '</h3>'
	});
	var marker = new google.maps.Marker({
		        map: map,
		        position: new google.maps.LatLng(address.lat,address.lng),
		        title: address.name
		    });
	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
  	});
}

google.maps.event.addDomListener(window, 'load', initialize);