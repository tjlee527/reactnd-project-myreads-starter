import React from 'react';
import BookChanger from './BookChanger.js';

class Book extends React.Component {
  render(){
    let imgLink = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imgLink}")`,
            }}>
          </div>
          <BookChanger
            changeBookStatus={this.props.changeBookStatus}
            book={this.props.book}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors? this.props.book.authors.map((author, index) => (
            <div key={index}>{author}</div>
          )): null}
        </div>
      </div>
    )
  }
};

export default Book;