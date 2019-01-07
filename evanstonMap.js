
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
    content: 'Bangers & Lace',
    coords: {lat: 42.045393,lng:-87.682453}
  },

  {
    content: 'Burger King',
    coords: {lat: 42.049787,lng:-87.680393}
  },

  {
    content: 'Dave\'s New Kitchen',
    coords: {lat: 42.058642, lng:-87.682509}
  },


  {
    content: 'Edzo\'s Burger Shop',
    coords: {lat: 42.046205, lng: -87.681551}
  },

  {
    content: 'Evanston Chicken Shack',
    coords: {lat: 42.052806, lng:-87.687400}
  },

  {
    content: 'Farmhouse Evanston',
    coords: {lat: 42.048570, lng:-87.680934}
  },

  {
    content: 'Found Kitchen and Social House',
    coords: {lat: 42.047181, lng:-87.678702}
  },

  {
    content: 'Kung Fu Tea',
    coords: {lat: 42.049835, lng: -87.681300}
  },
  {
    content: 'Joy Yee Noodle',
    coords: {lat: 42.0461335, lng:-87.6790438}
  },

  {
    content: 'Le Peep',
    coords: {lat: 42.04863, lng:-87.6831}
  },

  {
    content: 'Lou Malnati\'s Pizzeria',
    coords: {lat: 42.051472, lng:-87.682003}
  },

  {
    content: 'Mt. Everest Restaraunt',
    coords: {lat: 42.04804684, lng:-87.6804156}
  },

  {
    content: 'Olive Mediterranean Grill',
    coords: {lat: 42.049437, lng:-87.682010}
  },

  {
    content: 'Panera Bread',
    coords: {lat: 42.048636, lng:-87.682197}
  },

  {
    content: 'Peppercorns Kitchen',
    coords: {lat: 42.046276, lng:-87.680845}
  },

  {
    content: 'Pete Miller\'s Steak & Seafood',
    coords: {lat: 42.045920, lng:  -87.681585}
  },

  {
    content: 'Prairie Moon',
    coords: {lat: 42.047415, lng:-87.678841}
  },

  {
    content: 'Shang Noodle and Chinese',
    coords: {lat: 42.046168, lng:-87.680282}
  },

  {
    content: 'Table to Stix Ramen',
    coords: {lat:42.0472079, lng:-87.6854}
  },

  {
    content: 'Taco Diablo',
    coords: {lat: 42.046922,lng:-87.686389}
  },

  {
    content: 'Tapas Barcelona',
    coords: {lat:42.046715, lng:-87.679121}
  },

  {
    content: 'Todoroki',
    coords: {lat:42.045884, lng:-87.679306}
  },

  {
    content: 'World of Beer',
    coords: {lat:42.047214, lng:-87.681631}
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
//Creates a rectangle around the marker to show whether the restaurant is opened
function addRectangle(restaurant){
   var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: evanston,
    bounds: {
      north: restaurant.coords.lat + 0.0001,
      south: restaurant.coords.lat - 0.0001,
      east: restaurant.coords.lng + 0.0001,
      west: restaurant.coords.lng - 0.0001
    }
  });

}

//Given a list of restaraunt names and coords, adds them to the map
function addRestaraunts(places){
  for(var i = 0; i<places.length; i++){
    addMarker(places[i]);
    addRectangle(places[i]);
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
