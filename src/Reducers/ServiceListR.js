import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE_FIELD} from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000}
];

export default function serviceListReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_SERVICE:
		  const {name, price} = action.payload;
		  return [...state, {id: nanoid(), name, price: Number(price)}];
		case REMOVE_SERVICE:
		console.log(action);
		  const {id} = action.payload;
		  return state.filter(service => service.id !== id);
		case EDIT_SERVICE_FIELD:
		  //return state;
		  return state.map(o => {
		  	if(o.id === action.payload.id) {
		  	  console.log(state);
		  		return { ...o, name: action.payload.name, price: action.payload.value}
		  	}
		  	return o;
		  });
		default:
		  return state;
	}
}