import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function ServiceFilter(props) {
	const {data} = props;
	const [filter, setFilter] = useState('')

	const handleChange = event => {
		console.log(event.target.value);
		setFilter(event.target.value)
	}
	const handleSubmit = event => { 
		event.preventDefault();
		console.log(event.target.value)
		data(filter);
	}

	return ( <form onSubmit={handleSubmit} >
		<input  onChange={handleChange}/>
		<button type='submit'>Filter</button>
	</form>)
}