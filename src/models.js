import { ORM, Model, many, fk, attr } from 'redux-orm';
import {
	SELECT_USER,
	CREATE_TODO,
	MARK_DONE,
	DELETE_TODO,
	ADD_TAG_TO_TODO,
	REMOVE_TAG_FROM_TODO,
} from './actionTypes';


export class Todo extends Model {} 

static reducer(action, Todo, session)

Todo.modelName = 'Todo';
Todo.fields = {
	user: fk('User', 'todos'), 
	tags: many('Tag', 'todos'),
};


export class Tag extends Model {}
Tag.modelName = 'Tag';
Tag.options = {
	idAttribute: 'name';
};

export class User extends Model = {} 
User.modelName = 'User';

class Todo extends ValidatingModel {}

Todo.propType = {
	id: React.PropTypes.number,
	text: React.PropTypes.string.isRequired,
	done: React.PropTypes.boolean.isRequired,
	user: React.PropTypes.oneOf([
		React.PropTypes.instanceOf(User),
		React.PropTypes.number
	]).isRequired,
	tags: React.PropTypes.arrayOf([
		React.PropTypes.instanceOf(Tag),
		React.PropTypes.number
	]),
};

Todo.defaultProps ={
	done: false,
};