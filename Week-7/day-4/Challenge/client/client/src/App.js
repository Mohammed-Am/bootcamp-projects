import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    inputValue: '',
    responseMessage: ''
  };

  componentDidMount() {
    this.fetchMessage();
  }

  fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      const data = await response.text();
      this.setState({ message: data });
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: this.state.inputValue })
      });
      const data = await response.text();
      this.setState({ responseMessage: data, inputValue: '' });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="Enter something"
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.responseMessage && (
          <p>{this.state.responseMessage}</p>
        )}
      </div>
    );
  }
}

export default App;