import React, { Component } from 'react';
import './Exercise.css'
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <>
        <h1 style={{style_header}}>This is a Header</h1>
        <p className='para'>This is a paragraph</p>
        <a href="https://di-react-carousel.surge.sh/">This is a Link</a>
        <form>
          <label>Enter your name</label>
          <input type="text" />
          <button>Submit</button>
        </form>
        <img src="https://www.inovex.de/wp-content/uploads/react.png" alt="React logo" />
        <p>This is a list</p>
        <ul>
          <li>ff</li>
          <li>vv</li>
          <li>xx</li>
        </ul>
      </>
    );
  }
}

export default Exercise;