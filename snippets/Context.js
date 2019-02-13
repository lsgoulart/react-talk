import React, { Component } from 'react';

let UserContext;
const { Provider, Consumer } = (UserContext = React.createContext());

class UserProvider extends Component {
  state = {
    loading: false,
    users: [],
  };

  requestUsers() {
    this.setState({ loading: true }, () => {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ loading: false, users }));
    });
  }

  render() {
    return (
      <Provider value={{ ...this.state, requestUsers: this.requestUsers }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer, UserContext };
