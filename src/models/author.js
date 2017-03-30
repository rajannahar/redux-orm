import {fk, many, attr, Model} from 'redux-orm';

class Author extends Model {
	static reducer(action, Author, session) {
		switch(action.type) {
			case "DATA_LOADED":
				const {books} = action.payload;

				books.map(book => {
					book.authors.map(author => {
						if (!Author.hasId(author.id)) {
							Author.create(author);
						}
					})
				})

				break;
		}
	}
};

Author.modelName = 'Author';

Author.fields = {
	id: attr(),
	name: attr()
}

export default Author;