import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import {loadMockData} from './actions/actions';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/reducer';
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log("red ", reducer);

const store = createStore( 
	reducer,
	composeEnhancers(applyMiddleware(  
		thunkMiddleware 
	))
);

/*console.log(store);*/

store.dispatch(loadMockData()); 


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

