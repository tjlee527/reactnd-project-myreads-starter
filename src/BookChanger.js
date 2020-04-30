import React from 'react';

class BookChanger extends React.Component {
  state = {
    value: 'move'
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({
      value: newValue
    })
    this.props.changeBookStatus(this.props.book.id, newValue)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.state.value}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookChanger;