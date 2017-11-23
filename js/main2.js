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

	// var temp = 'temperature ' + data.main.temp;
	// var name = 'city name: ' + data.name;

	var newTable = document.createElement("TABLE");
	var newTH = document.createElement("TH");
	var newTH2 = document.createElement("TH");
	var newTH3 = document.createElement("TH");
	var newTR = document.createElement("TR");
	var newTR2 = document.createElement("TR");
	var newTD = document.createElement("TD");
	var newTD2 = document.createElement("TD");
	var newTD3 = document.createElement("TD");

  newTH.innerText = 'Temperature '
  newTH2.innerText = 'Wind Speed'
	newTH3.innerText = 'Humidity ';
	newTD.innerText = data.main.temp;
	newTD2.innerText = data.wind.speed;
	newTD3.innerText = data.main.humidity;

  newTR2.appendChild(newTD);
	newTR2.appendChild(newTD2);
	newTR2.appendChild(newTD3);
	newTR.appendChild(newTH);
	newTR.appendChild(newTH2);
	newTR.appendChild(newTH3);
	newTable.appendChild(newTR);
	newTable.appendChild(newTR2);

	newTable.className = 'table table-striped table table-bordered'

	var results = document.getElementById("results");
	results.appendChild(newTable);



}

})

console.log(url);



}
