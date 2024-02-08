const Experience = () => {
  const workExperience = ["Qualcomm", "Northrop Grumman"];

  return (
    <div id="Experience">
      {workExperience.map((item) => (
        <div className="card" key={item}>
          <div className="card-body">
            <h1 className="card-title">{item}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
