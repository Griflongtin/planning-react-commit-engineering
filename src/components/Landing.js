import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from './Session/withAuthorization';
import { db } from '../firebase';

class Landing extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;
    const { authUser } = this.props;

    db.onceGetUser(authUser.uid).then(snapshot =>
      onSetUsers(snapshot.val())
    );
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <h2>{users.username}</h2>
        <h2>{users.email}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userState.users,
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(Landing);
