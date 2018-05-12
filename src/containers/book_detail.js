import React, { Component } from 'react';
import { connect } from 'react-redux';

// This file relies on the activeBook being passed 
// var book = state.activeBook

class BookDetail extends Component {
	render() {
		// Check if the book is initialized to a value. 
		// If not, make the user select a book.
		if (!this.props.book) {
			return <div>Select a book to continue.</div>;
		}

		return (
			<div>
				<h3>Title: </h3>{this.props.book.title}
				<h3>Pages: </h3>{this.props.book.pages}
				<h3>Author: </h3>{this.props.book.author}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
