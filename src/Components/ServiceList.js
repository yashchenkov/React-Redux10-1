import React from 'react';
import PropTypes from 'prop-types';
import { removeService, editServiceField } from '../actions/actionCreators';
import {useSelector, useDispatch} from 'react-redux';

export default function ServiceList() {
	const items = useSelector(state => state.serviceList);
	const dispatch = useDispatch();

	const handleRemove = id => {
		dispatch(removeService(id));
	};

	const handleEdit = (name, value, id) => {
		dispatch(editServiceField(name, value, id));
	}

	return (
		<ul>
			{items.map(o => {
				console.log(o);
				 return (<li key ={o.id}>
					{o.name} {o.price}
				  <button onClick={() => {
					  handleRemove(o.id)
					  console.log(o);
							}}>X</button>
							<button onClick={() => handleEdit(o.name, o.price, o.id)}>*</button>
							</li>)})}
		</ul>
	)
}