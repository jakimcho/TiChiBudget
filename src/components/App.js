import React from 'react';
import User from '../model/User'
import UserView from './presentational/UserView'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World"
    };
  }

  render() {
    let message = this.state.message;
    let user1 = new User("Gosho", "HellFire");
    let user2 = new User("Mitko", "HellFire");
    user1.firstName = "Ot pochivka";

    return (
      <div className="component-app">
        <h1>{message}</h1>

        <UserView user={user1} />
        <UserView user={user2} />
      </div>
    );
  }
}

export default App;
