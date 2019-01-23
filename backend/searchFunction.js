function searchFunction(){
  var q = document.getElementById("search").value;
  var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&location=evanston&open_now=true" ;
  $.ajax({
     url: myurl,
     headers: {
      'Authorization':'Bearer 7-uNealg5uVCOofbvSItfxosg8aoTHPS7ZmsjqyP12Va7SyKQdgt8lII8_qeVIDe7Ibcz7Z93RfMwyz5xVArMPb6tejoT_fuWrBUwn0QCOtiJkaQwaY2sLNTGizuW3Yx',
  },
     method: 'GET',
     dataType: 'json',
     success: function(data){
        var totalresults = data.total;
        if (totalresults != 0) {
        var restaurant = data.businesses[0];
        alert(totalresults + " restaurants found in " + q + ". The first of them being " + restaurant.name);
      }
      else {
        alert("no results found");
      }
     }
   });
}

//in this search we are generating autocomplete results based on what is searched
//we will find the exact name of the restaurant the user is looking for
//Since the name search of yelp only gives back results if the EXACT name or ID is searched
function searchByName() {
  // Get search value form html
  var q = document.getElementById("search").value;
  //Gnerate URL to call the api
  //The form of the url goes like this:
  //"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=" + SEARCHWORD +"&latitude=42.047719&longitude=-87.683712"
  //location coords corespond to the location of the center of the maps
  var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=" + q +"&latitude=42.047719&longitude=-87.683712";
  //now we are actually calling the api, using GET, it returns a jason object
  $.ajax({
     url: myurl,
     headers: {
       //Authorization goes by the form "Bearer ApiKEY"
      'Authorization':'Bearer 7-uNealg5uVCOofbvSItfxosg8aoTHPS7ZmsjqyP12Va7SyKQdgt8lII8_qeVIDe7Ibcz7Z93RfMwyz5xVArMPb6tejoT_fuWrBUwn0QCOtiJkaQwaY2sLNTGizuW3Yx',
  },
  method: 'GET',
  dataType: 'json',
  success: function(data){
     if(data.businesses == ""){
       alert("no result found");
       return;
     }
     var i = 0;
     for (i; i < data.businesses.length; i++){
     var id = data.businesses[i].id;
     var name = data.businesses[i].name;
     alert("found " + name);
     searchById(id);
   }
   }
  });
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
   var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/" + id;
   $.ajax({
      url: myurl,
      headers: {
       'Authorization':'Bearer 7-uNealg5uVCOofbvSItfxosg8aoTHPS7ZmsjqyP12Va7SyKQdgt8lII8_qeVIDe7Ibcz7Z93RfMwyz5xVArMPb6tejoT_fuWrBUwn0QCOtiJkaQwaY2sLNTGizuW3Yx',
   },
   method: 'GET',
   dataType: 'json',
   success: function(data){
     if (data.is_closed == false) {
      alert(data.name + " is opened now!");}
     else {
       alert(data.name + " is closed and will open at " + data.hours.open[0].start);
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
