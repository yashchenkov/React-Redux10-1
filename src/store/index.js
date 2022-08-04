import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../Reducers/ServiceListR';
import serviceAddReducer from '../Reducers/ServiceAddR';

const reducer = combineReducers({
	serviceList: serviceListReducer,
	serviceAdd: serviceAddReducer,
});

export  const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
