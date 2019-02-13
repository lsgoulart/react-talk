import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class Users extends Component {
  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    const { loading, users } = this.props;
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

const UsersList = () => (
  <UserConsumer>{context => <Users {...context} />}</UserConsumer>
);

export default UsersList;
