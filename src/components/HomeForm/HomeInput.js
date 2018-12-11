import React from 'react';

const HomeInput = props => (
	<div className={`input-row ${props.class}`}>
		<label htmlFor={props.name}>{props.label}</label>
		<input 
			type={props.type} 
			name={props.name} 
			id={props.name} 
			placeholder={props.placeholder}
			incometype={props.incomeType}
			onChange={props.handleChange} 
		/>
	</div>
);

export default HomeInput;