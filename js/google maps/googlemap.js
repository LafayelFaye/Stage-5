// JavaScript Document

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.352069, lng: -71.074096},
          zoom: 17
        });
		
var marker = new google.maps.Marker({
    position: {lat: 42.352069, lng: -71.074096},
    map: map,
    title: 'Stage 5 Staging Company',
	icon: 'stage 5 images/map-pin.png'
  });

      }