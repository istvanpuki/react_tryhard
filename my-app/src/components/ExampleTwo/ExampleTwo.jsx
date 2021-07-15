import React from 'react';

class ExampleTwo extends React.Component {
    
    constructor(props) { //Példányosítás
      super(props); //Meghívása itt kötelező, hogy működjön. A szülőelemre hivatkozik (constructor)?
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
      document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }

  export default ExampleTwo;