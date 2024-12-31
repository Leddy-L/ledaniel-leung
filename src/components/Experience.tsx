const Experience = () => {
  const workExperience = ["Qualcomm", "Northrop Grumman"];

  return (
    <div id="Experience">
      <div>
        {workExperience.map((exp_item) => (
          <div>
            <h1>{exp_item}</h1>
            <p>Some text</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
