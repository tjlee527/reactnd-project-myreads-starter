import React from 'react';
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar.js';
import Book from './Book.js';

class Search extends React.Component {
  state = {
    searchedBooks: []
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then(results => {
        console.log(results)
        if (results && !results.error) {
          this.setState(prevState => ({
            searchedBooks: results
          }))
        } else {
          this.setState(prevState => ({
            searchedBooks: []
          }))
        }
      })
      .catch(err => console.log(err))
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