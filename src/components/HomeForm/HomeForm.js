import React from 'react';

import './HomeForm.css';
import HomeInput from './HomeInput';

class HomeForm extends React.Component{
	render(){
		return(
			<form className="homeform" onSubmit={this.props.handleSubmit}>
				<HomeInput
					label="Your monthly salary?"
					name="salary"
					class="full"
					incomeType="income"
					type="text"
					handleChange={this.props.handleChange} 
				/>

				<HomeInput
					label="Your monthly housing costs (rent/load)?"
					name="rent"
					class="full"
					incomeType="expense"
					type="text"
					handleChange={this.props.handleChange} 
				/>

				<HomeInput
					label="Your monthly car expenses (load/lease/gas)?"
					name="car"
					class="full"
					incomeType="expense"
					type="text"
					handleChange={this.props.handleChange} 
				/>

				<HomeInput
					label="Your monthly public transport expenses?"
					name="transport"
					class="full"
					incomeType="expense"
					type="text"
					handleChange={this.props.handleChange} 
				/>

				<button className="submit-btn">Calculate</button>
			</form>
		);
	}
};

export default HomeForm;