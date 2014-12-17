function showMETCO() {
	document.getElementById('METCO-dem').style.display = "block";
}
function hideMETCO() {
	document.getElementById('METCO-dem').style.display = "none";
}

function showBos() {
	document.getElementById('boston-dem').style.display = "block";
}
function hideBos() {
	document.getElementById('boston-dem').style.display = "none";
}

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
	var information = '<h1>'+address.name+'</h1>'+
	    	'<h3>METCO Student Enrollment: '+ address.enrollment + '</h3>'
	if (address.demographics) {
		console.log('demographics');
		information += '<table>'+
				'<caption>School District Demographics</caption>'+
				'<tr>'+
					'<th>Race</td>'+
					'<th>Percent</td>'+
				'</tr>'+
				'<tr>'+
					'<td>African American</td>'+
					'<td>'+ address.demographics['African American']+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Asian</td>'+
					'<td>'+ address.demographics['Asian']+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Hispanic</td>'+
					'<td>'+ address.demographics['Hispanic']+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Native American</td>'+
					'<td>'+ address.demographics['Native American']+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>White</td>'+
					'<td>'+ address.demographics['White']+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Native Hawaiian, Pacific Islander</td>'+
					'<td>'+ address.demographics['Native Hawaiian, Pacific Islander']+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Multi-Race, Non Hispanic</td>'+
					'<td>'+ address.demographics['Multi-Race, Non Hispanic']+'</td>'+
				'</tr>'+
			'</table>'
	};
	var infowindow = new google.maps.InfoWindow({
	    content: information,
	    maxWidth: 1000
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