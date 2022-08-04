import {CHANGE_SERVICE_FIELD, EDIT_SERVICE_FIELD} from '../actions/actionTypes';

const initialState = {
	name: '',
	price: ''
};

export default function serviceAddReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SERVICE_FIELD:
		  const {name, value} = action.payload;
		  return {...state, [name]: value};
		case EDIT_SERVICE_FIELD:
		  console.log(action.payload);
		  return {...state}
		default:
		  return state;
	}
}