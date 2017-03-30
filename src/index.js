import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';





import {loadMockData} from './actions/actions';
import thunkMiddleware from 'redux-thunk';
import orm from './orm/orm';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( 
	rootReducer,
	composeEnhancers(applyMiddleware(  
		thunkMiddleware 
	))
);

store.dispatch(loadMockData()); 


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


console.log("jkk");