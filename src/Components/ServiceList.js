import React from 'react';
import PropTypes from 'prop-types';
import { removeService, editServiceField, clearServiceAddState} from '../actions/actionCreators';
import {useSelector, useDispatch} from 'react-redux';

export default function ServiceList() {
	const items = useSelector(state => state.serviceList);
	const item = useSelector(state => state.serviceAdd)
	const dispatch = useDispatch();



	const handleRemove = ( id) => {
		dispatch(removeService(id));
		dispatch(clearServiceAddState())
	};

	const handleEdit = ( name, value, id) => {
		dispatch(editServiceField(name, value, id));
	}

	return (
		<ul>
			{items.map(o => {
				
				 return (<li key ={o.id}>
					{o.name} {o.price}
				  <button onClick={() => {
					  handleRemove( o.id)
					  console.log(o);
							}}>X</button>
							<button onClick={() => handleEdit(o.name, o.price, o.id)}>*</button>
							</li>)})}
		</ul>
	)
}