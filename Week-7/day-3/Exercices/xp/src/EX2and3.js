import React from "react";

class EX2and3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true
    };
  }

  shouldComponentUpdate() {
    return true; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  // Part II: componentDidUpdate
  componentDidUpdate() {
    console.log("after update");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  // Ex 3: func to toggle show state
  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete</button>
      </div>
    );
  }
}

// Ex 3
class Child extends React.Component {
  componentWillUnmount() {
    alert("The component is going to be unmounted");
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

export default EX2and3;