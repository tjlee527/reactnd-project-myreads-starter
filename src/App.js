import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf.js';
import Search from './Search.js';

class BooksApp extends React.Component {
  state = {
    books: [],
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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelf
            changeBookStatus={this.changeBookStatus}
            books={this.state.books}
            toggleSearchPage={this.toggleSearchPage}
          />
        )}>
        </Route>
        <Route exact path='/search' render={() => (
          <Search
            toggleSearchPage={this.toggleSearchPage}
            changeBookStatus={this.changeBookStatus}
          />
        )}>
        </Route>
      </div>
    )
  }
}

export default BooksApp
