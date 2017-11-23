function searchWeather() {

var api = 'http://api.openweathermap.org/data/2.5/weather?q='

var key = '&appid=70dc29522a78d509cb638e4f1db7404b'

var input = document.getElementById('city').value


var button = document.getElementById('submit')
var url = api + input + key

$.ajax ({

url: api + input + key,
dataType: 'json',
type: 'GET',

success: function(data) {
	console.log(data);
	console.log(data.name)
	console.log(data.main.temp)

	var temp = 'temperature ' + data.main.temp;
	var name = 'city name: ' + data.name;

	var newH1 = document.createElement('h1');
	var newH2 = document.createElement('h2');

	newH1.innerText = temp;
	newH2.innerText = name;

	var results = document.getElementById("results");
	results.appendChild(newH1);
	results.appendChild(newH2);


}

})

console.log(url);



}
