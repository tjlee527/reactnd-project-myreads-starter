import React from 'react';
import BookChanger from './BookChanger.js';

class Book extends React.Component {
  render(){
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")` }}></div>
          <BookChanger />
        </div>
    <div className="book-title">{this.props.book.title}</div>
    <div className="book-authors">
      {this.props.book.authors.map((author, index) => (
        <div key={index}>{author}</div>
      ))}
    </div>


      </div>
    )
  }
};

export default Book;