import React from 'react';
import PropTypes from 'prop-types';
import { removeService, editServiceField, clearServiceAddState} from '../actions/actionCreators';
import {useSelector, useDispatch} from 'react-redux';

export default function ServiceList({filter}) {
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

	/*const renderHelper = (data) => {
		if(data === '') {
		  items.map(o => {
			  return (<li key ={o.id}>
					{o.name} {o.price}
				  <button onClick={() => {
					  handleRemove( o.id)
					  console.log(o);
							}}>X</button>
							<button onClick={() => handleEdit(o.name, o.price, o.id)}>*</button>
							</li>)})
		} else {
			items.map(o => {
				if(o.name.includes(data)) {
					return (<li key ={o.id}>
					{o.name} {o.price}
				  <button onClick={() => {
					  handleRemove( o.id)
					  console.log(o);
							}}>X</button>
							<button onClick={() => handleEdit(o.name, o.price, o.id)}>*</button>
							</li>)}
				}
			)
		}
	}*/
    if(filter === ''){
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
} else {
	return(<ul>
		{items.map(o => {
				if(o.name.includes(filter)) {
					return (<li key ={o.id}>
					{o.name} {o.price}
				  <button onClick={() => {
					  handleRemove( o.id)
					  console.log(o);
							}}>X</button>
							<button onClick={() => handleEdit(o.name, o.price, o.id)}>*</button>
							</li>)}
				}
			)
		}
	</ul>)
}

	
}