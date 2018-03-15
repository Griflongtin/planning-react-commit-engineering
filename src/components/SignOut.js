import React from 'react';
import { auth } from '../firebase';

const SignOut = () =>
  <div>
    <style jsx>{`
    .signOutButton {
      background-color: transparent;
      border: none;
    }
      `}</style>
    <button
      className="signOutButton"
      type="button"
      onClick={auth.doSignOut}>
    Sign Out
    </button>
  </div>;

export default SignOut;
