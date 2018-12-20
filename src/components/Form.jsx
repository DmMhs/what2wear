import React from 'react';

import './Form.css';

class Form extends React.Component {
	render() {
		return(
			<div className="form-wrapper">
				<div className="location">
					<input  
						type="text"
						id="inputCity"
						name="city"
						placeholder="City you are in..."
					/>
					<input
						type="text"
						id="inputCountry"
						name="country" 
						placeholder="Country code..."
					/>
					<button id="submit" onClick={this.props.onClick}>GET RESULT</button>
				</div>
				{
					this.props.city === undefined &&
					<p className="warning">Please, check if city name is correct!</p>
				}
			</div>
		);	
	}
}

export default Form;