import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

import './App.css';

import { getWeather } from './actions/weather';
import WeatherPage from './pages/WeatherPage';
import OutfitPage from './pages/OutfitPage';

class App extends Component {
  	render() {
    	return (
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="app-wrapper">
							<div className="App">
								<Router>
									<Switch>
										<Route
											exact path={`${process.env.PUBLIC_URL}/`}
											render={props => <WeatherPage city={this.props.city} country={this.props.country} temp={this.props.temp} description={this.props.description} icon={this.props.icon} {...this.props} />}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/outfit`}
											render={props => <OutfitPage city={this.props.city} temp={this.props.temp} description={this.props.description} icon={this.props.icon} hymidity={this.props.hymidity} clouds ={this.props.clouds} {...this.props}/>}
										/>
									</Switch>
								</Router>
							</div>
						</div>
					</div>
				</div>
			</div>
				
    );
  }
}

export default withRouter(connect(
	store => ({
		city: store.fetchWeather.city,
		country: store.fetchWeather.country,
		temp: store.fetchWeather.temp,
		hymidity: store.fetchWeather.hymidity,
		clouds: store.fetchWeather.clouds,
		description: store.fetchWeather.description,
		icon: store.fetchWeather.icon
	}),
	dispatch => ({
	  onGetWeather: () => {

			dispatch(getWeather());
	  }
	})
  )(App));
