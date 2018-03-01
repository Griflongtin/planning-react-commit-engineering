import React, { Component } from 'react';

class LogInLogo extends Component {
  render() {
    return (
      <div>
        <style jsx>{`
          .AppLogInLogo {
            margin: 0 auto;
            border: 2px solid black;
            width: 200px;
            Height: 200px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
          }
          .LogoText {
            padding: 0 10px;
          }

      `}</style>
        <div className="AppLogInLogo">
          <h1 className="LogoText">C</h1>
          <h1 className="LogoText">E</h1>
        </div>
      </div>
    );
  }
}

export default LogInLogo;
