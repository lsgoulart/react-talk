import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {({ loading, users, requestUsers }) => (
          <Fragment>
            {!loading && !users.length && requestUsers()}

            {loading ? (
              <h1>Carregando...</h1>
            ) : (
              <ul>
                {users.map(user => (
                  <li>{user.name}</li>
                ))}
              </ul>
            )}
          </Fragment>
        )}
      </UserConsumer>
    );
  }
}

export default UsersList;
