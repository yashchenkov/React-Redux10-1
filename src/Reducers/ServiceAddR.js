import {CHANGE_SERVICE_FIELD, EDIT_SERVICE_FIELD, CLEAR_SERVICE_ADD_FIELD} from '../actions/actionTypes';

const initialState = {
	name: '',
	price: '',
	id: ''
};

export default function serviceAddReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SERVICE_FIELD:
	      const {name, value} = action.payload;
		  return {...state, [name]: value};
		case EDIT_SERVICE_FIELD:       
		  console.log('call');
		  //const {name, value} = action.payload;
		  return {...state, name: action.payload.name, price: action.payload.value, id: action.payload.id}
		case CLEAR_SERVICE_ADD_FIELD:       
		  return initialState
		default:
		  return state;
	}
}