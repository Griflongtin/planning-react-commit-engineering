import React from 'react';
import Nav from './Nav';
import UserForm from './UserForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      LoggedIn: null,
      signUpSelected: false
    };
    this.tabClick = this.tabClick.bind(this);
  }
  tabClick(){
    this.setState({signUpSelected: !this.state.signUpSelected});
  }

  render() {
    return (
      <div>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          :root {
            --color1: rgba(1, 32, 63, 1);
            --color2: rgba(55, 136, 204, 1);
            --color3: rgba(0, 96, 193, 1);
            --color4: rgba(23, 40, 68, 1);
            --color5: rgba(4, 75, 142, 1);
          }
          .UserForm {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
      `}</style>
        {(this.state.LoggedIn) ? (<Nav />) :
          (<div className="UserForm">
            <UserForm signUpSelectedPass={this.state.signUpSelected} tabClicked={this.tabClick}/>
          </div>)}
      </div>
    );
  }
}

export default App;
