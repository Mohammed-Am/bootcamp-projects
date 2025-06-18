import React, { Component } from 'react';

class BuggyCounter extends Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default BuggyCounter; // Correct default export