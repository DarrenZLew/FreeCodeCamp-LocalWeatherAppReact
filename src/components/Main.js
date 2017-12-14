import React, { Component } from 'react';
import MainHeader from './MainHeader';
import WeatherForecast from './WeatherForecast';
import api from '../utils/api';
import { Link } from 'react-router-dom';

const WeatherForm = (props) => {
	return (
		<form className='header' onSubmit={props.handleSubmit}>
			Enter a City and State
			<WeatherActions value={props.location} handleChange={props.handleChange} />
		</form>	
	)
}

const WeatherActions = (props) => {
		return (
			<div>
				<input 
					type='text' 
					placeholder='St. George, Utah'
					value={props.value}
					onChange={props.handleChange} />
				<button className='button-main' type='submit' >Get Weather</button>
			</div>
		)
}

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			forecast: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateLocation = this.updateLocation.bind(this);
	}

	handleChange(event) {
		this.setState({location: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.location !== '') {
			this.updateLocation(this.state.location)			
		}
	}

	updateLocation(location) {
		var weekWeather = [];
		api.fetchWeather5Days(location)
			.then(function (weather) {
				weather.map(function (day) {
					return weekWeather.push({
						iconImg: 'http://openweathermap.org/img/w/' + day.weather[0].icon + '.png',
						date: new Date(day.dt * 1000).toString().slice(0,10),
						description: day.weather[0].description, 
						minTemp: day.temp.min.toFixed(1),
						maxTemp: day.temp.max.toFixed(1),
						humidity: day.humidity
					});			 
				})
				this.setState({
					forecast: weekWeather
				});
			}.bind(this));		
	}

	render() {
		return (
			<div>
				<MainHeader />
				{!this.state.forecast &&
					<WeatherForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} location={this.state.location} />
				}
				{this.state.forecast &&
					<Link to={this.state.forecast}>
						<WeatherForecast forecast={this.state.forecast} location={this.state.location} />
					</Link>
				}						
			</div>
		)
	}
}

export default Main;