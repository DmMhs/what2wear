import React from 'react';

import './Titles.css';

class Titles extends React.Component {
	render() {
		return(
			<div className="titles-wrapper">
				<h1>{this.props.title}</h1>
				<h3>{this.props.subtitle}</h3>
			</div>
		);	
	}
}

export default Titles;