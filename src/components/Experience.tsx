import React from "react";

const Experience = () => {
  const workExperience = ["Qualcomm", "Northrop Grumman"];

  return (
    <div id="experience">
      {workExperience.map((item) => (
        <div id={item}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
