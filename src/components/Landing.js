import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from './Session/withAuthorization';
import { db } from '../firebase';

class Landing extends Component {
  componentDidMount() {
    const { onSetUser } = this.props;
    const { authUser } = this.props;

    db.onceGetUser(authUser.uid).then(snapshot =>
      onSetUser(snapshot.val())
    );
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <h2>{user.username}</h2>
        <h2>{user.email}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = (dispatch) => ({
  onSetUser: (user) => dispatch({ type: 'USER_SET', user }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(Landing);
