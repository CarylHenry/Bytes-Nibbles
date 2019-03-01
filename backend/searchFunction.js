//Gloabl variable for map
var map;
//These two arrays correspond to all markers and inforWindows shown on the map
var markers = [];
var infoWindows = [];
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

//What the map initially displays
function displayMap() {
    var evanston = new google.maps.Map(document.getElementById('map'), mapQualities);
    map = evanston;
}

function initTime(){
  //initializes the time search inputs based on the current time
  //get the current date
  var now = new Date();
  //get the current hour
  var h = now.getHours();
  if(h<10){h='0'+h;}
  //get the current minutes
  var m = now.getMinutes();
  if(m<10){m='0'+m;}
  //time="hour:minutes"
  var time= '' + h + ":" + m +'';
  var timeOfDay = document.getElementsByClassName('search-item');
  document.getElementById('timeofday').value = time;
  //get the current day (0-6, where 0=Sunday)
  var d = ''+now.getDay();
  document.getElementById(d).selected ="selected";
}



  
    



//init function called at the start of the launch
//this calls the api to check for currently opened busniesses and shows them on the map
function init() {
  //Here is a very weird thing about Yelp: it only returns fifty busnineses max in each call
  //what we are doing here getting the first 150 results //
  //by calling the api three times and using different offsets for each one
  //Here we are calling for results 0 - 49
  var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=42.047719&longitude=-87.683712&open_now=true&limit=50&radius=1000" ;
  initHelper(myurl);
  // //Here we are calling for results 50 - 99
  // var myurl2 = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&location=evanston&open_now=true&limit=50&offset=50&radius=2000" ;
  // initHelper(myurl2);
  // //Here we are calling for result 100 - 149
  // var myurl3 = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&location=evanston&open_now=true&limit=50&offset=100&radius=2000" ;
  // initHelper(myurl3);
  displayMap();
  initTime();


  var input = document.getElementById("search");
  input.addEventListener("keyup", function(event){

    if(event.keyCode===13 && input.value!=""){
        event.preventDefault(); 
       $("#button").click();}})
}
//the intHelper helps us call the yelp api in the init function
function initHelper(url){
  $.ajax({
     url: url,
     headers: {'Authorization':'Bearer 7-uNealg5uVCOofbvSItfxosg8aoTHPS7ZmsjqyP12Va7SyKQdgt8lII8_qeVIDe7Ibcz7Z93RfMwyz5xVArMPb6tejoT_fuWrBUwn0QCOtiJkaQwaY2sLNTGizuW3Yx',},
     method: 'GET',
     dataType: 'json',
     success: function(data){
        var totalresults = data.total;
        if (totalresults != 0) {
          var i = 0;
          for (i; i < totalresults; i++) {
            addMarkers(data.businesses[i]);
        }
      }
      else {document.getElementById("no-results").style.display="block"}
     }
   });
}

//in this search we are generating autocomplete results based on what is searched
//we will find the exact name of the restaurant the user is looking for
//Since the name search of yelp only gives back results if the EXACT name or ID is searched
function searchByName() {

  //for every new search remove all markers and infoWindows from previous search
  clearMarkers();
  // Get search value form html
  var q = document.getElementById("search").value;
  //if there is a search term
  if (q != "") {
    //Gnerate URL to call the api
    //The form of the url goes like this:
    //"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=" + SEARCHWORD +"&latitude=42.047719&longitude=-87.683712"
    //location coords corespond to the location of the center of the maps
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=" + q +"&latitude=42.047719&longitude=-87.683712";
    //now we are actually calling the api, using GET, it returns a jason object
    $.ajax({
       url: myurl,
       headers: {'Authorization':'Bearer 7-uNealg5uVCOofbvSItfxosg8aoTHPS7ZmsjqyP12Va7SyKQdgt8lII8_qeVIDe7Ibcz7Z93RfMwyz5xVArMPb6tejoT_fuWrBUwn0QCOtiJkaQwaY2sLNTGizuW3Yx',},
       method: 'GET',
       dataType: 'json',
       async: false,
       success: function(data){
         //if there's no restaurant with the specified term
         if(data.businesses == ""){
           document.getElementById("no-results").style.display="block"
           return;
          }
          //if there's at least one restaurant with the specified term
         else{
           var found_count=0;
           var found=0;
           //check if these restaraunts are open according to the search time
           for (var i=0; i < data.businesses.length; i++){
             var id = data.businesses[i].id;
             searchById(id);
             }

            //if none of the restaraunts are open, display the no-results div
            if(markers.length==0){document.getElementById("no-results").style.display="block";}
            else{document.getElementById("no-results").style.display="none"}
         }}});}
  //if there is no search term, just search by the input time
  else{

    var d = new Date();
    var secOfDay = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
    var todayTime = (d.getTime() - (d.getTime() % 1000)) /1000 - secOfDay;


    var day = document.getElementById("weekday").value;
    if (day == 0) {day = 7;}
    var dayDif = d.getDay() - day;
    var time = document.getElementById("timeofday").value;
    time = "" + time.substring(0,2) + time.substring(time.length-2,time.length);
    var seconds = (time % 100) * 60 + (time - time % 100)/100 * 3600;


    var unix= todayTime + seconds - dayDif * 86400;

    var myurl = "https://cors-anywhere.herokuapp.com/"
                + "https://api.yelp.com/v3/businesses/"
                + "search?term=restaurant&latitude=42.047719&longitude=-87.683712&"
                + "open_at=" + unix + "&limit=50&radius=1000" ;

    initHelper(myurl);

  }
}
// This what the returned structure for autocomplete search
// In our search we are utilizing the IDs returned in theBUSNIESSES array that gives us returned lists of name
//     ["categories": [
//         {
//             "alias": "burgers",
//             "title": "Burgers"
//         },
//         {
//             "alias": "hotdogs",
//             "title": "Fast Food"
//         },
//         {
//             "alias": "restaurants",
//             "title": "Restaurants"
//         }
//     ],
//THIS IS WHAT WE WANT
//     "businesses": [
//         {
//             "id": "X37_LYAIC5TrF9EFHqhGtg",
//             "name": "Burger King"
//         },
//         {
//             "id": "4FiYCU_uU58Qy-7WiHTnmw",
//             "name": "Epic Burger"
//         }
//     ],
//     "terms": [
//         {
//             "text": "Burgers Delivery"
//         },
//         {
//             "text": "In-n-out Burger"
//         },
//         {
//             "text": "The Habit Burger Grill"
//         }
//     ]


//This function takes the businesses ids generated from the previous searchFunction
//and utilizes the businesse object to
//1, draw the location on the map
//2, determine  whether it is opened
// The structure of the businesse object is shown below the funtion
function searchById(id) {
  // this is the same api call from avbe except the search is now a id search
  //get the input time
   var d = document.getElementById("weekday").value;
   var time = document.getElementById("timeofday").value;
   var date = (parseInt(d, 10) + 6) % 7;
   time = "" + time.substring(0,2) + time.substring(time.length-2,time.length);
   var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/" + id;
   $.ajax({
      url: myurl,
      headers: {
       'Authorization':'Bearer 7-uNealg5uVCOofbvSItfxosg8aoTHPS7ZmsjqyP12Va7SyKQdgt8lII8_qeVIDe7Ibcz7Z93RfMwyz5xVArMPb6tejoT_fuWrBUwn0QCOtiJkaQwaY2sLNTGizuW3Yx',},
     method: 'GET',
     dataType: 'json',
     async: false,
     fail: function(){return 0;},
     success: function(data){
      //if the user didn't specify a time, search for a restaraunt at the current time
      if (time == "" || date == -1){
            bool = data.hours[0].is_open_now;
            if (bool == true ) {
              addMarker(data);
              return 1;
            }
            else{return 0;}}
      //if the user did specify a time
      else {
        var bool1 = false;
        var openTimes = [];
        var closeTimes = [];
        var openTimesTmr = [];
        data.hours[0].open.forEach(function(open){
            if (!bool1){
              var day = open.day
              if (day == date) {
                  bool1 = open.start <= time && open.end >= time;
                  openTimes.push(open.start);
                  closeTimes.push(open.end);}
              if (day == (date + 1) % 7) {
                openTimesTmr.push(open.start);}}});
        var return_val;
        if (bool1 == true){
          addMarker(data);
          return_val = 1;
          var la=data.coordinates.latitude;
          var lo= data.coordinates.longitude;
          var center = {lat: la, lng: lo};
          map.setCenter(center);
          map.setZoom(17);
          //alert(data.name + " is open now!");
        }
        else{return_val=0}

        return return_val;
      // if (bool1 == false){
      //   var disp = "";
      //   //(openTimes[0]);
      //   if (openTimes == ""){adisp = openTimesTmr[0]}
      //   else if (time > closeTimes[closeTimes.length -1])
      //   { if (openTimesTmr == ""){disp = " is closed tommorrow";}
      //     else {disp = openTimesTmr[0]}
      //   }
      //   else if (time < openTimes[0]){disp = openTimes[0]}
      //   else {
      //     var i = 1;
      //     while(disp == ""){
      //       if (time < openTimes[i]){
      //         disp = openTimes[i];
      //       }
      //       i = i + 1;
      //     }
      //   }
      //   //alert(data.name + " is closed and will open at " + disp)
      // }
    }


 }
   });
}

// Sample of a businesses object
//{
//     "id": "iVAibXK7ebXQ3yoI6cT5oA",
//     "alias": "peppercorns-kitchen-evanston",
//     "name": "Peppercorns Kitchen",
//     "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/p_9GAE-CQom6Xm5moAXfzw/o.jpg",
//     "is_claimed": true,
//     "is_closed": false,
//     "url": "https://www.yelp.com/biz/peppercorns-kitchen-evanston?adjust_creative=Rm4bvjLB6rgIDYaWl6Tv8w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=Rm4bvjLB6rgIDYaWl6Tv8w",
//     "phone": "+18475638461",
//     "display_phone": "(847) 563-8461",
//     "review_count": 216,
//     "categories": [
//         {
//             "alias": "szechuan",
//             "title": "Szechuan"
//         }
//     ],
//     "rating": 4,
//     "location": {
//         "address1": "620 Davis St",
//         "address2": "",
//         "address3": "",
//         "city": "Evanston",
//         "zip_code": "60201",
//         "country": "US",
//         "state": "IL",
//         "display_address": [
//             "620 Davis St",
//             "Evanston, IL 60201"
//         ],
//         "cross_streets": "Orrington Ave & Chicago Ave"
//     },
//     "coordinates": {
//         "latitude": 42.0463937,
//         "longitude": -87.6808515
//     },
//     "photos": [
//         "https://s3-media1.fl.yelpcdn.com/bphoto/p_9GAE-CQom6Xm5moAXfzw/o.jpg",
//         "https://s3-media1.fl.yelpcdn.com/bphoto/MA7b8m_g-RBFRJlgzWrcrQ/o.jpg",
//         "https://s3-media4.fl.yelpcdn.com/bphoto/1DENXWpY1eYfprkahT1-Uw/o.jpg"
//     ],
//     "price": "$$",
//     "hours": [
//         {
//             "open": [
//                 {
//                     "is_overnight": false,
//                     "start": "1100",
//                     "end": "2130",
//                     "day": 0
//                 },
//                 {
//                     "is_overnight": false,
//                     "start": "1100",
//                     "end": "2130",
//                     "day": 1
//                 },
//                 {
//                     "is_overnight": false,
//                     "start": "1100",
//                     "end": "2130",
//                     "day": 2
//                 },
//                 {
//                     "is_overnight": false,
//                     "start": "1100",
//                     "end": "2130",
//                     "day": 3
//                 },
//                 {
//                     "is_overnight": false,
//                     "start": "1100",
//                     "end": "2230",
//                     "day": 4
//                 },
//                 {
//                     "is_overnight": false,
//                     "start": "1100",
//                     "end": "2230",
//                     "day": 5
//                 },
//                 {
//                     "is_overnight": false,
//                     "start": "1100",
//                     "end": "2130",
//                     "day": 6
//                 }
//             ],
//             "hours_type": "REGULAR",
//             "is_open_now": true
//         }
//     ],
//     "transactions": [
//         "delivery",
//         "pickup"
//     ],
//     "special_hours": []
// }

function addMarkers(data) {
    var name = data.name;
    var url = data.url
    var coords = {lat: data.coordinates.latitude,lng: data.coordinates.longitude};
//add a new marker object
    var marker = new google.maps.Marker({
      position: coords,
      map: map
    });
//push this marker in the markers array
    markers.push(marker);
//make a new info window with this page
    var infoWindow=new google.maps.InfoWindow({
      content: '<a href= "'+ url + '" target="_blank">'+ name + '</a>'});
//push it into the infowindow array
    infoWindows.push(infoWindow);
//make it so the infoWindow pops up when you click the marker and all other infoWindows close
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    })

    map.addListener('click', function(){
        infoWindow.close();});
}

function addMarker(data) {
    var name = data.name;
    var url = data.url
    var coords = {lat: data.coordinates.latitude,lng: data.coordinates.longitude};
//add a new marker object
    var marker = new google.maps.Marker({
      position: coords,
      map: map
    });
//push this marker in the markers array
    markers.push(marker);
//make a new info window with this page
    var infoWindow=new google.maps.InfoWindow({
      content: '<a href= "'+ url + '" target="_blank">'+ name + '</a>'});
//push it into the infowindow array
    infoWindows.push(infoWindow);
//make it so the infoWindow pops up when you click the marker and all other infoWindows close
    infoWindow.open(map, marker);
    marker.addListener('click', function(){
      infoWindow.open(map, marker)})

    map.addListener('click', function(){
        infoWindow.close();});
}



function clearMarkers(){
   markers.forEach(function(marker) {
     marker.setMap(null);
   });
   markers = [];
}



//init is called everytime the web page laucnches
window.onload=init;
