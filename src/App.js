import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf.js';
import Search from './Search.js';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books: books
        });
      });
  }

  changeBookStatus = (id, newStatus) => {
    BooksAPI.update({id}, newStatus)
      .then(response => {
        this.setState(prevState => ({
          books: prevState.books.map(book => {
            if (book.id === id) {
              book.shelf = newStatus;
            }
            return book;
          })
        }))
      })
  }

  toggleSearchPage = () => {
    this.setState(prevState => ({
      showSearchPage: !prevState.showSearchPage
    }))
  }

  render() {
    return (
      <div className="app">
      {this.state.showSearchPage ? (
        <Search
          toggleSearchPage={this.toggleSearchPage}
        />
      ) : (
          <Bookshelf
            changeBookStatus={this.changeBookStatus}
            books={this.state.books}
            toggleSearchPage={this.toggleSearchPage}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
