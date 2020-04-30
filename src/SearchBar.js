import React from 'react';
import { Link } from 'react-router-dom';


class SeachBar extends React.Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    let query = e.target.value;
    this.setState((prevState) => ({
      value: query
    }));
    this.props.searchBooks(query.trim());
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link to='/'>
          <button
            className="close-search">
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default SeachBar;