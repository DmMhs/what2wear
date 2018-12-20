import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.Component {
	render() {
		return(
			<div className="navbar-wrapper">
				<ul>
                    <li className="weather-link">
                        <div>
                        <NavLink
                            exact
                            activeStyle={{ display: 'block', backgroundColor: 'rgb(255, 239, 146)', padding: '7px',borderRadius: '10px', color: '#333333', width: '80px' }}
                            to="/">
                            <span className="nav_item">WEATHER</span>
                        </NavLink>
                        </div>
                    </li>
                    <li className="outfit-link">
                    <div>
                        <NavLink
                            activeStyle={{ display: 'block', backgroundColor: 'rgb(255, 239, 146)', padding: '7px',borderRadius: '10px', color: '#333333', width: '80px' }}
                            to="/outfit">
                            <span className="nav_item">OUTFIT</span>
                        </NavLink>
                    </div>
                    </li>
                </ul>
			</div>
		);	
	}
}

export default Navbar;