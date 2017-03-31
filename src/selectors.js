

import orm from './orm/orm';
import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';

export const ormSelector = state => state.orm;

// console.log(ormSelector);


export const authorSelector = createSelector(
	

    ormSelector,
    state => state.orm,
    ormCreateSelector(orm, (session, bookId) => {
        // console.log('selector.js logging');
        // console.log(session, bookId);


        // return session.models.Author.map(author => {
        //     const obj = author.ref;
        //     obj.tags = author.books.withRefs.map(book => book.name);

        //     return obj;
        //     // console.log(obj);
        // });
    })
);




// 	session => {
// 	return session.Author.map(author => {

// 		// Returns a reference to the raw object in the store,
// 		// so it doesn't include any reverse or m2m fields.
// 		const obj = author.ref;
// 		// Object.keys(obj) === ['id', 'name']

// 		return Object.assign({}, obj, {
// 			books: author.books.withRefs.map(book => book.name),
// 		});
// 	});
// });



// console.log(authorSelector);


// export default authorSelector;



// Will result in something like this when run:
// [
//   {
//     id: 0,
//     name: 'Tommi Kaikkonen',
//     books: ['Introduction to redux-orm', 'Developing Redux applications'],
//   },
//   {
//     id: 1,
//     name: 'John Doe',
//     books: ['John Doe: an Autobiography']
//   }
// ]