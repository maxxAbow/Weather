//Variables
var location = document.getElementById('searchParam');
var apiKey = 'appid=ec34c45751e37747cd458e98fe53cb22'
var dataUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&' + 'limit=3&' + apiKey;

var longitude = dataUrl.lon;
var latitude = dataUrl.lat;

var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appkey=' + apiKey;

var forecast = document.getElementById('searchResults');

forecast.innerHTML=weatherUrl;