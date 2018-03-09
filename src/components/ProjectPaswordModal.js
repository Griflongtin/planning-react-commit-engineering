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
    `}</style>
      <div className="projectModalDiv">
      
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
  selectedProjectId: PropTypes.string
};

export default ProjectPaswordModal;
