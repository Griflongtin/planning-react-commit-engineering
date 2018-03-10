import React from 'react';
import PropTypes from 'prop-types';

function ProjectPaswordModal(props) {
  return(
    <div className="projectModelContaner">
      <style jsx>{`
        .projectModelContaner {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .projectModalDiv {
          width: 400px;
          height: 500px;
          background-color: var(--color5);
          border: 1px solid white;
        }
        .Input {
          display: block;
          border-radius: 30px;
          margin: 15px auto;
          padding: 0 0 0 10px;
          font-size: 20px;
          width: 75%;
          height: 40px;
        }
        .LoginButton {
          display: block;
          width: 75%;
          margin: 0 auto;
          width: 75%;
          height: 40px;
          border-radius: 30px;
        }
        .closeModalDiv {
          position: relative;
          width: 100%;
          height: 30px;
        }
        .closeModal {
          font-size: 30px;
          position: absolute;
          right: 2px;
        }
        p {
          color: var(--color4);
          text-align: center;
        }
    `}</style>
      <div className="projectModalDiv">
        <div className="closeModalDiv">
          <div className="closeModal" onClick={props.loginProjectModalDisplayToggle}>X</div>
        </div>
        <p>Project Name: {props.selectedProjectId ? props.projectListPass[props.selectedProjectId].projectName : null }</p>
        <p>Project Group Name: {props.selectedProjectId ? props.projectListPass[props.selectedProjectId].projectGroupName : null }</p>
        <input
          className="Input"
          type="text"
          placeholder="Project Number"
        />
        <input
          className="Input"
          type='password'
          placeholder="Project Password"
        />
        <button className="LoginButton">Login</button>
      </div>
    </div>
  );
}
ProjectPaswordModal.propTypes = {
  projectListPass: PropTypes.object,
  selectedProjectId: PropTypes.string,
  loginProjectModalDisplayToggle: PropTypes.func,

};

export default ProjectPaswordModal;
