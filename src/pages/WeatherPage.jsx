import React from 'react';

import Titles from '../components/Titles';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Weather from '../components/Weather';

import './WeatherPage.css';

class WeatherPage extends React.Component {
    render() {
        return (
            <div>
                <Titles
                    title="#what2wear"
                    subtitle="We'll help you based on the weather outside..."
                />
                <hr/>
                <Navbar></Navbar>
                <hr/>
                <h4>What city you are in ?</h4>
                <div className="main-section">
                    <Form
                        onClick={this.props.onGetWeather}
                        city={this.props.city}
                        className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                    />
                    <Weather
                        city={this.props.city}
                        country={this.props.country}
                        temp={this.props.temp}
                        description={this.props.description}
                        icon={this.props.icon}
                        className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                    />
                </div>
            </div>
        );
    }
   
}

export default WeatherPage;