import { Card } from "flowbite-react";
const Experience = () => {
  const workExperience = ["Qualcomm", "Northrop Grumman"];

  return (
    <div>
      <h1>Experience</h1>
      <Card className="bg-zinc-900">
        {workExperience.map((exp_item) => (
          <div>
            <h1>{exp_item}</h1>
            <p>Some text</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Experience;
