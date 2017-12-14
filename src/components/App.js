import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Main from './Main';
import WeatherForecast from './WeatherForecast';

class App extends Component {
  render() {
    return (
    	<Router>
	      <div>
	      	<Route exact path='/' component={Main} />
	      	<Route path='/madison' component={WeatherForecast} />
	      </div>
      </Router>
    )
  }
 }

 export default App;
