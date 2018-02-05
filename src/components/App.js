import React from 'react';
import User from '../models/Person';
import UserView from './presentational/UserView';
import { request } from 'request';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World"
    };
  }

  render() {
    let message = this.state.message;
    let users = userController.listAllUsers();

    request()

    return (
      <div className="component-app">
        <h1>{message}</h1>

        <UserView user={users[0]} />
        <UserView user={users[1]} />
      </div>
    );
  }
}

export default App;
