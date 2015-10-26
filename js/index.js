$(document).ready(function() {

	maxBounds = [[35.979854, 68.134408], [7.456501, 91.072745]]

	var map = L.map('map');
	var first = true;

	center = L.latLng(30.551711, 77.508653);

	// map.dragging.disable();
	map.scrollWheelZoom.enable();

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    id: 'akuchibotla.cig0ib8a507u2ujlvtluse19l',
	    maxZoom: 18,
	    minZoom: 1,
	    accessToken: 'pk.eyJ1IjoiYWt1Y2hpYm90bGEiLCJhIjoiY2lnMGliOW40MDd4eXV2bTQwY2dtcHNlYiJ9.irCaIKlxjQkTDQyL8dSSzg'
	}).addTo(map);

	var initialZoom = function() {
		//Zoom
		setTimeout(function() {
			map.setView(center, 4, {animate:true});
		}, 100);
		setTimeout(function() {
			map.setView(center, 8, {animate:true});
		}, 600);
		setTimeout(function() {
			map.setView(center, 11, {animate:true});
		}, 1100);
		setTimeout(function() {
			map.setView(center, 15, {animate:true});
		}, 1600);

		//UI init
		setTimeout(function() {

			//custom icon
			var myIcon = L.icon({
		    iconUrl: 'marker.png',
				iconSize: [46,48]
			});

			//creating markers and setting properties
			var marker1 = L.marker([30.558123, 77.504083], {title: "WARD 1", icon: myIcon})
										.bindPopup("<b>Ward 1 Info</b>", L.popup({'closeOnClick': true}))
										.on('click', function() { map.setView(marker1.getLatLng(), 15, {animate:true});})
										.addTo(map);

			var marker2 = L.marker([30.549871, 77.503179], {title: "WARD 2", icon: myIcon})
										.bindPopup("<b>Ward 2 Info</b>", L.popup({'closeOnClick': true}))
										.on('click', function() { map.setView(marker2.getLatLng(), 15, {animate:true});})
										.addTo(map);

			var marker3 = L.marker([30.549754, 77.519363], {title: "WARD 3", icon: myIcon})
										.bindPopup("<b>Ward 3 Info</b>", L.popup({'closeOnClick': true}))
										.on('click', function() { map.setView(marker3.getLatLng(), 15, {animate:true});})
										.addTo(map);

			var marker4 = L.marker([30.542396, 77.508649], {title: "WARD 4", icon: myIcon})
										.bindPopup("<b>Ward 4 Info</b>", L.popup({'closeOnClick': true}))
										.on('click', function() { map.setView(marker4.getLatLng(), 15, {animate:true});})
										.addTo(map);
			var astley = L.popup({'closeOnClick': true, 'minWidth': 1000, 'maxHeight': 1000});
			var marker5 = L.marker([30.562289, 77.516831], {title: "WARD 5", icon: myIcon})
										.bindPopup("<iframe width=\"300\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" frameborder=\"0\" allowfullscreen></iframe>", astley)
										.on('click', function() { map.setView(marker5.getLatLng(), 15, {animate:true});})
										.addTo(map);
			astley.update();
			map.on('zoomend', function() {
				if (map.getZoom() < 15) {
					map.setView(center, map.getZoom(), {animate:true, duration: 10});
				}
			});

		}, 2000);
	}

	// define rectangle geographical bounds
	var bounds = [[30.561467, 77.499169], [30.561135, 77.507366],
								[30.562982, 77.516936], [30.556959, 77.522172],
								[30.553854, 77.525819], [30.553522, 77.525347],
								[30.550713, 77.523888], [30.550307, 77.523674],
								[30.546352, 77.519640], [30.542582, 77.514790],
								[30.540877, 77.511000], [30.540955, 77.507022],
								[30.541344, 77.506118], [30.543252, 77.502456],
								[30.546639, 77.499924], [30.550026, 77.498794],
								[30.554815, 77.497845], [30.560498, 77.498885]];

	// create an orange rectangle
	L.polygon(bounds, {color: "#ff7800", weight: 1}).addTo(map);

	// // zoom the map to the rectangle bounds
	// map.fitBounds(bounds);

	map.fitWorld();
	initialZoom();
});
