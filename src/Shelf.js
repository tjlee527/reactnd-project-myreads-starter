import React from 'react';
import Book from './Book.js';

const Shelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {props.shelfType}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <Book
              key={book.id}
              book={book}
              changeBookStatus={props.changeBookStatus}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Shelf;