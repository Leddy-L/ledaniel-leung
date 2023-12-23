import React from "react";

const Projects = () => {
  return (
    <div className="container centered" id="experience">
      <div className="projects">
        <div className="row">
          <div className="project-card wide" id="random-word-generator">
            <h1 className="project-title">Random Word Generator</h1>
            <h2 className="project-subtitle">LKC Activities</h2>
          </div>
        </div>

        <div className="row">
          <div className="project-card wide" id="lkc-puzzle-room">
            <h1 className="project-title">Puzzle Room</h1>
            <h2 className="project-subtitle">LKC Activities</h2>
          </div>
        </div>

        <div className="row">
          <div className="project-card" id="launchpad">
            <h1 className="project-title">Launchpad</h1>
            <h2 className="project-subtitle">UCSD CSE 170</h2>
            <a
              href="https://cse170-launchpad.firebaseapp.com/"
              target="_blank"
            ></a>
          </div>

          <div className="project-card" id="camelliard">
            <h1 className="project-title">Camellia Rd</h1>
            <h2 className="project-subtitle">UCSD COGS 187B</h2>
            <a href="https://camelliard.github.io/" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
