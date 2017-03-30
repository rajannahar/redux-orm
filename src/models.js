import { ORM, Model, many, fk, attr } from 'redux-orm';
import {
	SELECT_USER,
	CREATE_TODO,
	MARK_DONE,
	DELETE_TODO,
	ADD_TAG_TO_TODO,
	REMOVE_TAG_FROM_TODO,
} from './actionTypes';


export class Todo extends Model {
	static reducer(action, Todo, session)  {
		const { payload, type } = action;
		switch (type) {
			case CREATE_TODO:
				// Payload includes a comma-delimited string
				// of tags, corresponding to the `name` property
				// of Tag, which is also its `idAttribute`.
				const tagIds = action.payload.tag.split(',').map(str => str.trim());

				// You can pass an array of ids for many-to-many relations.
				// `redux-orm` will create the m2m rows automatically.
				const props = Object.assign({}, payload, { tags: tagIds });

				Todo.create(props);
				break;

			case MARK_DONE:
				// withId returns a Model instance.
				// Assignment doesn't mutate Model instances.
				Todo.withId(payload).set('done', true);
				break;

			case DELETE_TODO;
				Todo.withId(payload).set('done', true);
				break;

			case ADD_TAG_TO_TODO:
				Todo.withId(payload.todo).tags.add(payload.tag);
				break;

			case REMOVE_TAG_FROM_TODO:
				Todo.withId(payload.todo).tags.remove(payload.tag);
				break;
		}

		// This call is optional. If the reducer returns 'undefined',
		// Redux-ORM will call getNextState for you.
		// return Todo.getNextState(); -> this is OLD, 0.8
	}
}

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