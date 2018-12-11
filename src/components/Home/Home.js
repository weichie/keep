import React from 'react';

import './Home.css';

import HomeForm from '../HomeForm/HomeForm';

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			income: {},
			expense: {},
			totalincome: 0,
			totalexpense: 0
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		const incometype = e.target.attributes.getNamedItem('incometype').value;
		const statekey = `total${incometype}`;

		let updateState = {...this.state[incometype]};
		updateState[e.target.name] = Math.trunc(e.target.value);
		
		this.setState({
			[incometype]: updateState
		}, () => {
			let sum_arr = Object.keys(this.state[incometype]).map((k) => this.state[incometype][k]);
			let total = sum_arr.reduce((x, y) => x + y, 0);

			this.setState({
				[statekey]: total
			});
		});
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state.totalincome - this.state.totalexpense);
	}

	render(){
		const diff = this.state.totalincome - this.state.totalexpense;
		let spanClass;
		
		switch(true){
			case (diff > 0): spanClass = 'green'; break;
			case (diff < 0): spanClass = 'red'; break;
			default: spanClass = '';
		}

		return(
			<div className="home--wrapper">
				<div className="container">
					<div className="home--intro">
						<h1>How financially independent are you</h1>
						<p>Calculate here your income and expenses and we'll tell you!</p>
					</div>

					<HomeForm 
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
					/>

					<ul className="result-list">
						<li>
							<strong>Total Income: </strong>
							<span>
								{this.state.totalincome}
							</span>
						</li>
						<li>
							<strong>Total Expense: </strong>
							<span>
								{this.state.totalexpense}
							</span>
						</li>
						<li>
							<strong>Difference: </strong>
							<span className={spanClass}>
								{diff}
							</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Home;