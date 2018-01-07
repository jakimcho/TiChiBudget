import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World"
    };
  }

  render() {
    let message = this.state.message;
    return (
      <div className="component-app">
        <h1>{message}</h1>
      </div>
    );
  }
}

export default App;
