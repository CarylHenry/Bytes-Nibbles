
function initMap() {

//What area the map displays
//What the map centers on + user controls for display
var mapQualities = {
  center: {lat: 42.047719, lng: -87.683712},
  zoom: 16.3,
  mapTypeControl: false,
  streetViewControl: false,
  styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#f3f4f4"
            },
            {
                "saturation": -84
            },
            {
                "lightness": 59
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#83cead"
            },
            {
                "saturation": 1
            },
            {
                "lightness": -15
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00ffff"
            },
            {
                "saturation": -60
            },
            {
                "lightness": 23
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbbbbb"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffcc00"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -22
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffcc00"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -35
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#7fc8ed"
            },
            {
                "saturation": 55
            },
            {
                "lightness": -6
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#7fc8ed"
            },
            {
                "saturation": 55
            },
            {
                "lightness": -6
            },
            {
                "visibility": "off"
            }
        ]
    }
  ]
};

//Create the map
var evanston = new google.maps.Map(document.getElementById('map'), mapQualities);
//evanston.mapTypes.set('styled_map', styledMapType);
//evanston.setMapTypeID('styled_map');

//list of restaraunt names and their locations
var restaraunts = [
  {
    content: 'Bangers & Lace',
    coords: {lat: 42.045393,lng:-87.682453},
    open: true
  },

  {
    content: 'Burger King',
    coords: {lat: 42.049787,lng:-87.680393},
    open: false
  },

  {
    content: 'Dave\'s New Kitchen',
    coords: {lat: 42.058642, lng:-87.682509},
    open: false
  },


  {
    content: 'Edzo\'s Burger Shop',
    coords: {lat: 42.046205, lng: -87.681551},
    open: false
  },

  {
    content: 'Evanston Chicken Shack',
    coords: {lat: 42.052806, lng:-87.687400},
    open: false
  },

  {
    content: 'Farmhouse Evanston',
    coords: {lat: 42.048570, lng:-87.680934},
    open: false
  },

  {
    content: 'Found Kitchen and Social House',
    coords: {lat: 42.047181, lng:-87.678702},
    open: false
  },

  {
    content: 'Kung Fu Tea',
    coords: {lat: 42.049835, lng: -87.681300},
    open: false
  },
  {
    content: 'Joy Yee Noodle',
    coords: {lat: 42.0461335, lng:-87.6790438},
    open: false
  },

  {
    content: 'Le Peep',
    coords: {lat: 42.04863, lng:-87.6831},
    open: false
  },

  {
    content: 'Lou Malnati\'s Pizzeria',
    coords: {lat: 42.051472, lng:-87.682003},
    open: false
  },

  {
    content: 'Mt. Everest Restaraunt',
    coords: {lat: 42.04804684, lng:-87.6804156},
    open: false
  },

  {
    content: 'Olive Mediterranean Grill',
    coords: {lat: 42.049437, lng:-87.682010},
    open: false
  },

  {
    content: 'Panera Bread',
    coords: {lat: 42.048636, lng:-87.682197},
    open: false
  },

  {
    content: 'Peppercorns Kitchen',
    coords: {lat: 42.046276, lng:-87.680845},
    open: false
  },

  {
    content: 'Pete Miller\'s Steak & Seafood',
    coords: {lat: 42.045920, lng:  -87.681585},
    open: false
  },

  {
    content: 'Prairie Moon',
    coords: {lat: 42.047415, lng:-87.678841},
    open: false
  },

  {
    content: 'Shang Noodle and Chinese',
    coords: {lat: 42.046168, lng:-87.680282},
    open: false
  },

  {
    content: 'Table to Stix Ramen',
    coords: {lat:42.0472079, lng:-87.6854},
    open: false
  },

  {
    content: 'Taco Diablo',
    coords: {lat: 42.046922,lng:-87.686389},
    open: false
  },

  {
    content: 'Tapas Barcelona',
    coords: {lat:42.046715, lng:-87.679121},
    open: false
  },

  {
    content: 'Todoroki',
    coords: {lat:42.045884, lng:-87.679306},
    open: false
  },

  {
    content: 'World of Beer',
    coords: {lat:42.047214, lng:-87.681631},
    open: false
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


//Creates a rectangle around the marker to indicate whether the restaurant is opened
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
//Update the color of the rectangle to green if the restaurant is opened
  if (restaurant.open){
  rectangle.strokeColor = "#00FF00";
  rectangle.fillColor = "#00FF00";
};
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
