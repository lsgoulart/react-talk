import React, { Component } from 'react';
import { UserContext } from './UserContext';

class Users extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.requestUsers();
  }

  render() {
    const { loading, users } = this.context;
    if (loading) return <h1>Carregando...</h1>;

    return (
      <ul>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default Users;
