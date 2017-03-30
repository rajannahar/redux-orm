import {combineReducers} from 'redux';
import {createReducer} from 'redux-orm';

import orm from '../orm/orm';

const ormReducer = createReducer(orm);

const rootReducer = combineReducers({
	orm: ormReducer
});

export default rootReducer; 