// //Variables

// var location = document.getElementById('searchParam');
var forecast = document.getElementById('searchResults');
var apiKey = 'e62f9765160953549b7bdae64e63ff92';
// var dataUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=3&appid=' + apiKey;
var dataUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=demo&appid=e62f9765160953549b7bdae64e63ff92';

// // // Set location default to Demo
function defaultLocation (){
    if (location === ''){
        location.innerHTML = 'Demo'
    }
};

// // //Grab lat/lon based on location
fetch(dataUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var latitude = data[0].lat;
    console.log(data[0].lat);
    var longitude = data[0].lon
    console.log(data[0].lon);

// // //Grab weather based on lat/lon
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?cnt=1&lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
fetch(weatherUrl)
    .then(function(response){
        return response.json();
    })
    .catch(console.error())
    .then(function (data){
    myObj = JSON.stringify(data.list);
    console.log(myObj);
// // //Insert weather to searchResults


    // forecast.innerHTML=myObj;
    })
    // weather = JSON.stringify(data.list);
    // console.log(weather);
})
