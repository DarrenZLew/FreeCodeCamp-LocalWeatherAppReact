var axios = require('axios');

module.exports = {
	fetchWeather5Days: function(value) {
		var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + value + '&units=imperial&cnt=6&APPID=f81d5f0ca622064a05ec2025f9c47a27');

		return axios.get(encodedURI)
			.then(function (response) {
				return response.data.list;
			});
	}
}