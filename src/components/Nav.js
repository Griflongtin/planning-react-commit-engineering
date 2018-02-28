import React, { Component } from 'react';
import pipeTexter from './../assest/img/pipeTexter.jpg';
import pipeValve from './../assest/img/pipeValve.png';

class Nav extends Component {
  render() {
    return (
      <div className="NavContainer">
        <style jsx global>{`
          :root {
            --color1: rgba(1, 32, 63, 1);
            --color2: rgba(55, 136, 204, 1);
            --color3: rgba(0, 96, 193, 1);
            --color4: rgba(23, 40, 68, 1);
            --color5: rgba(4, 75, 142, 1);
        }
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
          right: -1px;
          background-image: url(${pipeValve});
          background-repeat: no-repeat;
          background-size: contain;
          width: 166px;
          height: 166px;
        }
        .hide {
          display: none;
        }
          `}</style>
        <nav>
          <div className="navLinksDiv">
            <div className="Links">
              <div className="{pageRoute = Home ? PipeSlider : PipeSlider}"></div>
              <a className="navLinks">Home</a>
            </div>
            <div className="Links">
              <div className="{pageRoute = Projects ? hide : PipeSlider}"></div>
              <a className="navLinks">Projects</a>
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
        <div className="PipeSlider1"></div>
        <div className="PipeSlider2"></div>
      </div>
    );
  }
}

export default Nav;
