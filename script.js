// //Variables
var location = document.getElementById('searchParam');
var apiKey = 'e62f9765160953549b7bdae64e63ff92';
var dataUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=3&appid=' + apiKey;

// // Set location default to Demo
function defaultLocation (){
    if (location === ''){
        location.innerHTML = 'Demo'
    }
};

// //Grab lat/lon based on location
// var longitude = dataUrl.lon;
// var latitude = dataUrl.lat;
// //Grab weather based on lat/lon
// var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
// //Insert weather to searchResults
var forecast = document.getElementById('searchResults');
forecast.innerHTML=weatherUrl;