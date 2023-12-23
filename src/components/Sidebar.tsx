import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        // These show up in reverse order
        <li className="sidebar-item">
          <a href="#about">About</a>
        </li>
        <li className="sidebar-item">
          <a href="#experience">Experience</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
