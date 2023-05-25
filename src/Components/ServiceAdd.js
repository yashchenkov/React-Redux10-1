import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editServiceField,clearServiceAddState} from '../actions/actionCreators';

export default function ServiceAdd(props) {
	const item = useSelector(state => state.serviceAdd);
	const items = useSelector(state => state.serviceList);
	//console.log(item);
	const dispatch = useDispatch();

	const handleChange = event => { 
		const {name, value} = event.target; 
		console.log(item)
		dispatch(changeServiceField(name, value, item.id));
	}
	const handleSubmit = event => { 
		event.preventDefault();
		console.log(item);
		if(item.id === '') {
		    dispatch(addService(item.name, item.price));
		    dispatch(clearServiceAddState());
		} else {
			dispatch(editServiceField(item.name, item.price, item.id));
			dispatch(clearServiceAddState());
		}
		
	}

	return ( <form onSubmit={handleSubmit} >
		<input name='name' onChange={handleChange} value={item.name} />
		<input name='price' onChange={handleChange} value={item.price} />
		<button type='submit'>Save</button>
	</form>)
}