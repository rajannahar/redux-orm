import {fk, many, attr, Model} from 'redux-orm';

class Book extends Model {
	static reducer(action, Book, session) {
		switch(action.type) {
			case "DATA_LOADED": 
				const { books } = action.payload;
				books.map(book => {
					Book.create(book);
				});

				break;
			default:
		}
	}
};

Book.modelName = 'Book';

Book.fields = {
	id: attr(),
	title: attr(),
	authors: many('Author'),
	publisher: fk('Publisher'),
};

export default Book;