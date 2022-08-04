import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService} from '../actions/actionCreators';

export default function ServiceAdd(props) {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = event => { 
		const {name, value} = event.target; 
		dispatch(changeServiceField(name, value));
	}
	const handleSubmit = event => { 
		event.preventDefault();
		dispatch(addService(item.name, item.price)); 
	}

	return ( <form onSubmit={handleSubmit}>
		<input name='name' onChange={handleChange} value={item.name} />
		<input name='price' onChange={handleChange} value={item.price} />
		<button type='submit'>Save</button>
	</form>)
}