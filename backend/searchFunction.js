function searchFunction(){
  var q = document.getElementById("search").value;
  var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + q ;
  $.ajax({
     url: myurl,
     headers: {
      'Authorization':'Bearer 7-uNealg5uVCOofbvSItfxosg8aoTHPS7ZmsjqyP12Va7SyKQdgt8lII8_qeVIDe7Ibcz7Z93RfMwyz5xVArMPb6tejoT_fuWrBUwn0QCOtiJkaQwaY2sLNTGizuW3Yx',
  },
     method: 'GET',
     dataType: 'json',
     success: function(data){
        var totalresults = data.total;
        var restuarant = data.businesses[0];
        alert("The key word " + q + " got " + totalresults + " Results. The first of them being " + restuarant.name);
     }
   });
}
