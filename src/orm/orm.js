import {ORM} from 'redux-orm';

import Book from '../models/book';
import Author from '../models/author';
import Publisher from '../models/publisher';

const orm = new ORM();
orm.register(Book, Author, Publisher);


export default orm;