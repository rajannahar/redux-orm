import React from 'react';
import PureComponent from 'react-pure-render/component';
import { authorSelector } from './selectors';
import { connect } from 'react-redux';

export default class ListComponent extends PureComponent {
	render() {
		const props = this.props;
		console.log(props);
		/*const authors = this.props.authors.map(author => {
			return (
				<li key={author.id}>
					{author.name} has written {author.books.join(', ')}
				</li>
			);
		});*/

	

		/*return(
			<ul>
				{authors}
			</ul>
		);*/

		return(
			<p>list component</p>
		);

	}
}

/*function mapStateToProps(state) {
	return {
		authors: authorSelector(state.orm),
	};
}

export default connect(mapStateToProps)(ListComponent);*/