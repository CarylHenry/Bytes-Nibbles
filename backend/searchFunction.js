function searchFunction(){
  var q = document.getElementById("search").value;
  var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&location=" + q ;
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
