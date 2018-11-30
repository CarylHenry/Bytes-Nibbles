
function initMap() {

//What area the map displays
/*
var styledMapType=new google.maps.StyledMapType(
  [
    {
      featureType: 'administrative',
      elementType: 'labels',
      stylers: [{visibility: 'off'}]
    },
    {
      featureType: 'landscape'.
      elementType: 'labels',
      stylers: [{visibility: 'off'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{visibility: 'off'}]
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [{visibility: 'off'}]
    },

    {
      featureType: 'water',
      elementType: 'labels',
      stylers: [{visibility: 'off'}]
    }
  ],
  {name: 'Styled Map'}
);
*/

//What the map centers on + user controls for display
var mapQualities = {
  center: {lat: 42.047719, lng: -87.683712},
  zoom: 16.3,
  mapTypeControl: false,
  streetViewControl: false,
  //mapTypeControlOptions: {mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']},
};

//Create the map
var evanston = new google.maps.Map(document.getElementById('map'), mapQualities);
//evanston.mapTypes.set('styled_map', styledMapType);
//evanston.setMapTypeID('styled_map');

//list of restaraunt names and their locations
var restaraunts = [
  {
    content: 'Table to Stix Ramen',
    coords: {lat:42.0472079, lng:-87.6854}
  },
  {
    content: 'Lou Malnati\'s Pizzeria',
    coords: {lat: 42.0514, lng:-87.6841}
  },
  {
    content: 'Mt. Everest Restaraunt',
    coords: {lat: 42.04804684, lng:-87.6804156}
  },
  {
    content: 'Edzo\'s Burger Shop',
    coords: {lat: 42.0462027, lng:-87.6837355}
  }
]

var infoWindows=[];
var restarauntMarkers=[];

//Creates a marker and infoWindow objects for a given restaraunt
function addMarker(restaraunt){

  //make a new marker object
  var marker = new google.maps.Marker({
    position: restaraunt.coords,
    map: evanston
  })

  //add the marker to the list of markers on the map
  restarauntMarkers.push(marker);

  //make an infoWindow for that marker
  var infoWindow=new google.maps.InfoWindow({
    content: restaraunt.content});

  //add the infoWindow to the infoWindow list
  infoWindows.push(infoWindow);

  //make it so the infoWindow pops up when you click the marker and all other infoWindows close
  marker.addListener('click', function(){
    removeInfoWindows();
    infoWindow.open(evanston, marker)})
}

//Given a list of restaraunt names and coords, adds them to the map
function addRestaraunts(places){
  for(var i = 0; i<places.length; i++){
    addMarker(places[i]);
  }
}

addRestaraunts(restaraunts)

//Removes all open infoWindows
function removeInfoWindows(){
  for(var i = 0; i<infoWindows.length; i++){
    infoWindows[i].close();}
}

//When the user clicks on the map, all open infoWindows close
evanston.addListener('click', function(){removeInfoWindows()});
}
