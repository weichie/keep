import React from 'react';

import './Home.css';

import HomeForm from '../HomeForm/HomeForm';

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			income: {},
			expense: {},
			totalIncome: 0,
			totalExpense: 0
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		const incometype = e.target.attributes.getNamedItem('incometype').value;

		if(incometype === 'income'){
			let income = {...this.state.income};
			income[e.target.name] = Math.trunc(e.target.value);
			this.setState({
				income
			}, () => {
				let income_arr = Object.keys(this.state.income).map((k) => this.state.income[k]);
				let totalIncome = income_arr.reduce((x, y) => x + y, 0);
				this.setState({totalIncome});
			});
		}else{
			let expense = {...this.state.expense};
			expense[e.target.name] = e.target.value;
			this.setState({
				expense,
			}, () => {
				let expense_arr = Object.keys(this.state.expense).map((k) => Math.trunc(this.state.expense[k]));
				let totalExpense = expense_arr.reduce((x, y) => x + y, 0);
				this.setState({totalExpense});
			});
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state.totalIncome - this.state.totalExpense);
	}

	render(){
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

					Total Income: {this.state.totalIncome}<br />
					Total Expense: {this.state.totalExpense}
				</div>
			</div>
		);
	}
}

export default Home;