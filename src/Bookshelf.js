import React from 'react';
import Shelf from './Shelf.js';

class Bookshelf extends React.Component {

  render () {
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  shelfType='Currently Reading'
                  books= {this.props.books.filter(book => book.shelf === 'currentlyReading')}
                  changeBookStatus={this.props.changeBookStatus}
                />
                <Shelf
                  shelfType='Want to Read'
                  books= {this.props.books.filter(book => book.shelf === 'wantToRead')}
                  changeBookStatus={this.props.changeBookStatus}
                />
                <Shelf
                  shelfType='Read'
                  books= {this.props.books.filter(book => book.shelf === 'read')}
                  changeBookStatus={this.props.changeBookStatus}
                />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.props.toggleSearchPage()}>Add a book</button>
            </div>
          </div>
    )
  }
};

export default Bookshelf;