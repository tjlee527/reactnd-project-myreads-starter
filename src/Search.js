import React from 'react';
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar.js';
import Book from './Book.js';

class Search extends React.Component {
  state = {
    searchedBooks: []
  }

  searchBooks = (query) => {
    query.length ?
      BooksAPI.search(query)
      .then(results => {
        if (results && !results.error) {
          this.setState(prevState => ({
            searchedBooks: results.filter(book => book.imageLinks)
          }))
        } else {
          this.setState(prevState => ({
            searchedBooks: []
          }))
        }
      })
      .catch(err => console.log(err))
    :
    this.setState(prevState => ({
      searchedBooks: []
    }))
  }

  findShelf = (selectedBook) => {
    let shelf = 'none';
    if (selectedBook.shelf) {
      shelf = selectedBook.shelf;
    } else {
      this.props.books.forEach(book => {
        if (book.id === selectedBook.id) {
          shelf = book.shelf;
        }
      })
    }
    return shelf;
  }


  render() {
    return (
      <div className="search-books">
        <SearchBar
          searchBooks={this.searchBooks}
        />
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.searchedBooks.map(book => (
            <Book
              shelf={this.findShelf(book)}
              key={book.id}
              book={book}
              changeBookStatus={this.props.changeBookStatus}
            />
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;