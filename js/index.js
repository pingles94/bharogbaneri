var map;

function initMap() {
  map = new google.maps.Map(document.getElementsByClassName('map')[0], {
  	zoom: 14,
  	minZoom: 14,
  	disableDefaultUI: true,
    center: new google.maps.LatLng(30.562218, 77.497936),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}

function markerGenerator(name, coordinate, map) {
	var marker = new google.maps.Marker({
	    position: coordinate,
	    map: map,
	    title: name
	});
}

places = [
	['Primary Health Center', [30.560069, 77.513733]],
	['Secondary School (HS)', [30.559061, 77.517062]],
	['Computer Lab/Ayurvedic Center', [30.559006, 77.516603]],
	['Mahila Mandal', [30.559570, 77.516531]],
	['Convenience Stores', [30.560246, 77.511274]],
	['Greenhouse', [30.560902, 77.510453]],
	['Anganwadi Teacher’s House', [30.560525, 77.510277]],
	['Anganwadi (Ward 3)', [30.560207, 77.510739]],
	['Purli Primary School', [30.577132, 77.505167]],
	['Vrijinder’s House', [30.575122, 77.502520]],
	['Temple', [30.575679, 77.501371]],
	['Aids Awareness Campaign Dude', [30.575947, 77.501453]],
	['Land Meetings', [30.577169, 77.503930]],
	['Bakahan Kelewala Ward 4', [30.560204, 77.543298]],
	['Smaun Kanyan Ward 5', [30.549314, 77.535992]],
	['Sarpanch', [30.555964, 77.536133]],
	['Anganwadi for Ward 5', [30.555780, 77.536152]],
	['Meenu (CS Teacher)', [30.560372, 77.517334]],
	['Anganwadi for Ward 4', [30.561139, 77.523469]],
	['Primary School (Ward 4)', [30.560544, 77.525855]],
	['Right (Convenience Store) Left (Purli)', [30.562348, 77.500990]],
	['Middle School (not in BB)', [30.556524, 77.477615]]
];

filters = ['Ward 1', 'Ward2', 'Ward3', 'Ward4'];

google.maps.Polygon.prototype.getBounds = function() {
    var bounds = new google.maps.LatLngBounds()
    this.getPath().forEach(function(element,index){bounds.extend(element)})
    return bounds;
};

var ward1Coords = [{lat:30.586316, lng:77.505041}, {lat:30.585401, lng:77.501269}, {lat:30.584933, lng:77.498321}, {lat:30.583582, lng:77.497649}, {lat:30.583203, lng:77.497175}, {lat:30.582840, lng:77.497387}, {lat:30.582504, lng:77.497289}, {lat:30.582148, lng:77.497436}, {lat:30.581800, lng:77.497307}, {lat:30.581243, lng:77.497731}, {lat:30.580817, lng:77.497826}, {lat:30.580451, lng:77.497743}, {lat:30.580283, lng:77.497253}, {lat:30.580381, lng:77.496763}, {lat:30.580396, lng:77.496172}, {lat:30.580240, lng:77.495579}, {lat:30.580012, lng:77.495015}, {lat:30.579588, lng:77.494772}, {lat:30.579316, lng:77.494536}, {lat:30.579010, lng:77.494677}, {lat:30.578727, lng:77.494662}, {lat:30.578436, lng:77.494897}, {lat:30.578145, lng:77.494737}, {lat:30.578239, lng:77.493716}, {lat:30.578054, lng:77.492987}, {lat:30.578162, lng:77.492025}, {lat:30.577341, lng:77.491764}, {lat:30.576432, lng:77.491953}, {lat:30.574725, lng:77.491703}, {lat:30.573938, lng:77.491916}, {lat:30.571569, lng:77.492078}, {lat:30.570893, lng:77.492304}, {lat:30.569669, lng:77.495715}, {lat:30.568272, lng:77.497178}, {lat:30.568564, lng:77.501940}, {lat:30.568918, lng:77.503520}, {lat:30.569017, lng:77.504388}, {lat:30.568473, lng:77.505337}, {lat:30.568392, lng:77.506923}, {lat:30.568847, lng:77.507981}, {lat:30.568707, lng:77.508735}, {lat:30.568707, lng:77.508735}, {lat:30.569087, lng:77.509453}, {lat:30.568951, lng:77.512786}, {lat:30.571187, lng:77.515725}, {lat:30.572912, lng:77.517866}, {lat:30.572920, lng:77.520520}, {lat:30.573943, lng:77.522626}, {lat:30.576171, lng:77.518951}, {lat:30.580406, lng:77.515018}, {lat:30.585472, lng:77.513773}, {lat:30.587617, lng:77.510450}, {lat:30.587911, lng:77.508440}, {lat:30.586316, lng:77.505041}];
var ward2Coords = [{lat:30.568548, lng:77.501609}, {lat:30.567858, lng:77.501290}, {lat:30.567218, lng:77.502051}, {lat:30.566621, lng:77.501362}, {lat:30.566420, lng:77.501133}, {lat:30.566294, lng:77.500343}, {lat:30.565660, lng:77.499628}, {lat:30.565550, lng:77.499021}, {lat:30.564918, lng:77.498727}, {lat:30.564696, lng:77.498949}, {lat:30.564412, lng:77.498985}, {lat:30.564253, lng:77.498799}, {lat:30.564154, lng:77.498829}, {lat:30.564107, lng:77.499082}, {lat:30.563568, lng:77.499198}, {lat:30.562946, lng:77.499482}, {lat:30.562525, lng:77.500217}, {lat:30.562412, lng:77.500813}, {lat:30.562322, lng:77.501005}, {lat:30.562462, lng:77.501100}, {lat:30.561996, lng:77.501952}, {lat:30.561352, lng:77.502647}, {lat:30.561012, lng:77.503457}, {lat:30.560755, lng:77.503401}, {lat:30.560489, lng:77.503531}, {lat:30.560336, lng:77.503808}, {lat:30.560282, lng:77.504549}, {lat:30.560444, lng:77.504821}, {lat:30.560375, lng:77.505012}, {lat:30.560084, lng:77.505079}, {lat:30.559861, lng:77.505471}, {lat:30.560133, lng:77.506228}, {lat:30.560040, lng:77.506633}, {lat:30.560586, lng:77.507219}, {lat:30.560062, lng:77.507995}, {lat:30.560800, lng:77.510547}, {lat:30.560409, lng:77.510837}, {lat:30.560365, lng:77.511223}, {lat:30.560201, lng:77.511418}, {lat:30.560476, lng:77.512215}, {lat:30.560324, lng:77.513663}, {lat:30.560415, lng:77.514532}, {lat:30.560295, lng:77.514873}, {lat:30.560311, lng:77.515694}, {lat:30.560203, lng:77.516091}, {lat:30.559843, lng:77.516262}, {lat:30.560182, lng:77.516753}, {lat:30.560008, lng:77.517034}, {lat:30.560001, lng:77.517620}, {lat:30.559391, lng:77.518492}, {lat:30.559768, lng:77.518585}, {lat:30.560198, lng:77.518959}, {lat:30.560643, lng:77.518854}, {lat:30.561224, lng:77.518993}, {lat:30.561764, lng:77.519052}, {lat:30.562396, lng:77.519527}, {lat:30.563183, lng:77.519712}, {lat:30.563710, lng:77.519639}, {lat:30.564524, lng:77.519946}, {lat:30.564820, lng:77.519791}, {lat:30.564998, lng:77.519406}, {lat:30.565387, lng:77.519548}, {lat:30.565701, lng:77.519343}, {lat:30.566008, lng:77.519556}, {lat:30.566598, lng:77.519356}, {lat:30.566800, lng:77.519617}, {lat:30.567734, lng:77.519328}, {lat:30.568026, lng:77.519370}, {lat:30.568359, lng:77.519204}, {lat:30.568587, lng:77.518955}, {lat:30.568539, lng:77.518714}, {lat:30.568988, lng:77.518045}, {lat:30.569171, lng:77.517742}, {lat:30.570484, lng:77.517552}, {lat:30.570698, lng:77.517779}, {lat:30.570666, lng:77.517916}, {lat:30.571337, lng:77.518109}, {lat:30.571563, lng:77.518366}, {lat:30.571808, lng:77.518423}, {lat:30.572093, lng:77.518528}, {lat:30.572747, lng:77.518404}, {lat:30.572829, lng:77.517678}, {lat:30.572485, lng:77.517296}, {lat:30.572214, lng:77.516997}, {lat:30.571714, lng:77.516848}, {lat:30.571413, lng:77.516382}, {lat:30.571041, lng:77.516216}, {lat:30.570669, lng:77.516083}, {lat:30.570425, lng:77.515535}, {lat:30.570310, lng:77.515039}, {lat:30.569811, lng:77.514792}, {lat:30.569441, lng:77.514415}, {lat:30.569073, lng:77.513744}, {lat:30.569030, lng:77.513184}, {lat:30.568733, lng:77.512808}, {lat:30.568864, lng:77.511969}, {lat:30.568706, lng:77.511075}, {lat:30.568649, lng:77.510067}, {lat:30.568877, lng:77.509192}, {lat:30.568536, lng:77.508667}, {lat:30.568678, lng:77.507571}, {lat:30.568223, lng:77.506979}, {lat:30.568515, lng:77.505592}, {lat:30.568535, lng:77.505096}, {lat:30.568886, lng:77.504413}, {lat:30.568883, lng:77.503461}, {lat:30.568368, lng:77.502475}, {lat:30.568243, lng:77.501938}, {lat:30.568548, lng:77.501609}];

var ward1 = new google.maps.Polygon({
	paths: ward1Coords,
	strokeColor: '#FF0000',
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: '#FF0000',
	fillOpacity: 0.35
});

var ward2 = new google.maps.Polygon({
	paths: ward2Coords,
	strokeColor: '#FF0000',
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: '#FF0000',
	fillOpacity: 0.35
});

var wards = [ward1, ward2, 0, 0];

$(document).ready(function() {

	initMap();

	google.maps.event.addDomListener(window, 'resize', function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, 'resize');
		map.setCenter(center); 
	});

	var allowedBounds = new google.maps.LatLngBounds(
	     new google.maps.LatLng(30.546687, 77.471524), 
	     new google.maps.LatLng(30.582681, 77.539492)
	);

	var lastValidCenter = map.getCenter();

	google.maps.event.addListener(map, 'center_changed', function() {
	    if (!allowedBounds.contains(map.getCenter())) {
	    	map.panTo(lastValidCenter);
	    }
	    else {
	    	lastValidCenter = map.getCenter();
	    }
	});

	for (var i = 0; i < places.length; i++) {
		markerGenerator(places[i][0], new google.maps.LatLng(places[i][1][0], places[i][1][1]), map);
	}

	$('table').height(75 * filters.length);
	var filterRow = '<tr><td class="filter">SPLICE</td></tr>';
	for (var i = 0; i < filters.length; i++) {
		(function(i) {
			var currFilter = $.parseHTML(filterRow.replace('SPLICE', filters[i]));

			$(currFilter).mouseover(function() {
				wards[i].setMap(map);
			}).mouseout(function() {
				wards[i].setMap(null);
			}).click(function() {
				var center = wards[i].getBounds().getCenter();
				var offsetLng = center.lng() - 0.0090115;
				map.panTo({lat: center.lat(), lng: offsetLng});
				map.setZoom(15);
			})

			$('#filters').append(currFilter);

		})(i);
	}
});
