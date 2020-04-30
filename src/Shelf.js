import React from 'react';
import Book from './Book.js';

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfType}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <Book key={book.id} book={book}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
};

export default Shelf;