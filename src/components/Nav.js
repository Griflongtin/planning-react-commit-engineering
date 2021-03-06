import React from 'react';
import pipeTexter from './../assest/img/pipeTexter.jpg';
import pipeValve from './../assest/img/pipeValve.png';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import SignOut from './SignOut';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from './Session/withAuthorization';


const Nav = ({authUser}) =>
  <div className="NavContainer">
    <style jsx>{`
        .NavContainer {
          position: relative;
          width: 100%;
        }
        nav {
          position: relative;
          display: flex;
          justify-content: center;
          transform: translate(-50%, -50%)
          width: 85%;
          background-image: url(${pipeTexter});
          background-repeat: repeat;
          box-shadow: inset 0 0 10px #000000;
          margin: 10px 0px;
          height: 80px;
        }
        .navLinksDiv {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(100% - 332px);
        }
        .navLinks {
          margin: 0 40px;
        }
        .Links {
          position: relative;
        }
        .PipeSlider1 {
          position: absolute;
          top: -25px;
          left: -1px;
          background-image: url(${pipeValve});
          background-repeat: no-repeat;
          background-size: contain;
          width: 166px;
          height: 166px;
        }
        .PipeSlider {
          position: absolute;
          left: -22px;
          top: -56px;
          background-image: url(${pipeValve});
          background-repeat: no-repeat;
          background-size: contain;
          width: 166px;
          height: 166px;
        }
        .PipeSlider2 {
          position: absolute;
          top: -25px;
          right: 0px;
          background-image: url(${pipeValve});
          background-repeat: no-repeat;
          background-size: contain;
          width: 166px;
          height: 166px;
        }
        .hide {
          display: none;
        }
        .LogNavButton {
          position: absolute;
          top: 50px;
          left: 52px;
          padding: 5px;
          border: 2px solid black;
        }
        .LogUserName {
          display: flex;
          justify-content: center;
        }
          `}</style>
    <nav>
      <div className="navLinksDiv">
        <div className="Links">
          <div className="{pageRoute = Home ? hide : PipeSlider}"></div>
          <Link className="navLinks" to={routes.LANDING}>Home</Link>
        </div>
        <div className="Links">
          <div className="{pageRoute = Projects ? hide : PipeSlider}"></div>
          <Link className="navLinks" to={routes.PROJECT_LIST}>Projects</Link>
        </div>
        <div className="Links">
          <div className="{pageRoute = Profile ? hide : PipeSlider}"></div>
          <a className="navLinks">Profile</a>
        </div>
        <div className="Links">
          <div className="{pageRoute = About ?  hide : PipeSlider})"></div>
          <a className="navLinks">About</a>
        </div>
      </div>

    </nav>
    <div className="PipeSlider1">
      {authUser ?
        <div className="LogNavButton">
          <SignOut />
        </div>
        : null}
    </div>
    <div className="PipeSlider2">
      <div className="LogUserName">{authUser.username}</div>
    </div>
  </div>;

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});
const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps))(Nav);
