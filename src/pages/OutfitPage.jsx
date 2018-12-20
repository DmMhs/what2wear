import React from 'react';

import Titles from '../components/Titles';
import Navbar from '../components/Navbar';
import Wear from '../components/Wear';

import './OutfitPage.css';

class OutfitPage extends React.Component {
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
                {
                    (this.props.city !== undefined && this.props.city !== '') &&
                    <h4>Some clothes to your consideration...</h4>
                }
                <Wear
                    city={this.props.city}
                    temp={this.props.temp}
                    description={this.props.description}
                    icon={this.props.icon}
                    hymidity={this.props.hymidity}
                    clouds ={this.props.clouds}
                />
            </div>
        );
    }
   
}

export default OutfitPage;