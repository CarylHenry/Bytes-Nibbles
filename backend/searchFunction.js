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

function searchByName() {
  var q = document.getElementById("search").value;
  var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=" + q +"&latitude=42.047719&longitude=-87.683712";
  $.ajax({
     url: myurl,
     headers: {
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

function searchById(id) {
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
