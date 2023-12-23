import React from "react";

const Sidebar = () => {
  return (
    <div className="centered container" id="contacts">
      <div className="row">
        <a
          className="contact-circle"
          href="https://www.linkedin.com/in/ledaniel-leung"
          target="_blank"
        >
          <i className="fab fa-linkedin-in fa-inverse fa-2x"></i>
        </a>
        <a
          className="contact-circle"
          href="https://github.com/Asianu"
          target="_blank"
        >
          <i className="fab fa-github-alt fa-inverse fa-2x"></i>
        </a>
        <a
          className="contact-circle"
          href="mailto: ledaniel.leung@gmail.com"
          target="_blank"
        >
          <i className="fas fa-envelope fa-inverse fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
