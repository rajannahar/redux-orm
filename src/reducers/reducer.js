import {combineReducers} from 'redux';
import {createReducer} from 'redux-orm';

import orm from '../orm/orm';

const ormReducer = createReducer(orm);

const reducer = combineReducers({
	orm: ormReducer
});


export default reducer; 