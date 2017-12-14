import React from 'react';

const DayForecast = (props) => {
	return (
		<div className='forecast-day'>
			<li>
				<img src={props.day.iconImg} alt={props.day.description} />
			</li>
			<li>{props.day.date}</li>
		</div>
	)
}

const WeatherForecast = (props) => {
	return (
		<div>
			<div className='forecast-header'>
			{props.location}
			</div>
			<ul className='forecast'>
				{props.forecast.map(function(day) {
					return (
						<DayForecast day={day} key={day.date} />
					)
				})};
			</ul>
		</div>
	)
}

export default WeatherForecast;