import React from 'react';

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
      type="button">
    Sign Out
    </button>
  </div>;

export default SignOut;
