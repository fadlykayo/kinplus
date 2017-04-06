$(document).ready(function(){
  $(".button-collapse").sideNav()
  $('.slider').slider({
    indicators: false,
    height: 440
  })
});

var map = new GMaps({
  el: '#map',
  lat: -6.2099505,
  lng: 106.7521659
});

map.addMarker({
  lat: -6.2099505,
  lng: 106.7521659,
  title: 'KIN+',
  infoWindow: {
    content: '<p>HTML Content</p>'
  }
});


/*
TODO:
responsive
javascript button
google map api
*/
