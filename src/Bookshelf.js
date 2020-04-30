import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf.js';

 const Bookshelf = (props) => {
   return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            shelfType='Currently Reading'
            books= {props.books.filter(book => book.shelf === 'currentlyReading')}
            changeBookStatus={props.changeBookStatus}
          />
          <Shelf
            shelfType='Want to Read'
            books= {props.books.filter(book => book.shelf === 'wantToRead')}
            changeBookStatus={props.changeBookStatus}
          />
          <Shelf
            shelfType='Read'
            books= {props.books.filter(book => book.shelf === 'read')}
            changeBookStatus={props.changeBookStatus}
          />
        </div>
      </div>
      <div className="open-search">
        <Link
          to='/search'>
          <button>
            Add a book
          </button>
        </Link>
      </div>
    </div>
   )
 }

export default Bookshelf;