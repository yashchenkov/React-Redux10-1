import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE_FIELD, CLEAR_SERVICE_ADD_FIELD} from './actionTypes'

export function addService(name, price) {
	return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
	return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
	return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function editServiceField(name, value, id) {
	return {type: EDIT_SERVICE_FIELD, payload: {name, value, id}};
}

export function clearServiceAddState() {
	return {type: CLEAR_SERVICE_ADD_FIELD, payload: {}};
}