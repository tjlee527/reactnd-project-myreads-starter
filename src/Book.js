import React from 'react';
import BookChanger from './BookChanger.js';

const Book = (props) => {
  let imgLink = props.book.imageLinks ? props.book.imageLinks.thumbnail : '';

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
          changeBookStatus={props.changeBookStatus}
          book={props.book}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">
        {props.book.authors ? props.book.authors.map((author, index) => (
          <div key={index}>{author}</div>
        )): null}
      </div>
    </div>
  )
}

export default Book;