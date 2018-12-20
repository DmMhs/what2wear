import React from 'react';

import './Weather.css';


class Weather extends React.Component {
    render () {
        return (
            <div className="weather-wrapper">
            {
                (this.props.city !== undefined && this.props.city !== '') &&
                <div>
                    <span id="city">{this.props.city}, </span>
                    <span id="country">{this.props.country}</span><br/>
                    <span id="temp">{this.props.temp} ℃</span><br/>
                    <div className="description">
                        {
                            this.props.icon !== undefined &&
                            <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather-icon"/>
                        }
                        <span id="description">{this.props.description}</span>
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default Weather;