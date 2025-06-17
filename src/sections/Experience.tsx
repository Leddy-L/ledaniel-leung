import { Card } from "flowbite-react";

interface Experience {
  id: Number,
  name: String,
  logo?: ImageData,
  years: String,
  title: String,
  location: String,
  description: String,
  technologies?: Array<ImageData>
}

const Experience = () => {
  const workExperience = [
    {
      id: 0,
      name: "Qualcomm",
      years: "2022 - Present",
      title: "Software Engineer",
      location: "San Diego, CA.",
      description: "At Qualcomm, I supported the Software Automation and Tools (QSWAT) team by implementing new features, optimizing legacy applications, and supporting users daily, with the following technologies:"
    },
    {
      id: 1,
      name: "Northrop Grumman",
      years: "2019 - 2022",
      title: "Systems Engineer",
      location: "San Diego, CA.",
      description: "As an intern-to-fulltime hire, I worked on various middleware applications that supported the communications systems on avionic vehicles."
    }
  ];

  // see https://flowbite-react.com/docs/components/timeline for timeline-type of view

  return (
    <div id="Experience">
      <h1>Experience</h1>
      {workExperience.map((workExperience: Experience) => (
        <Card className="bg-zinc-900">
          <h1>{workExperience.name}</h1>
          <h2>{workExperience.years}</h2>
          <h2>{workExperience.title}</h2>
          <h2>{workExperience.location}</h2>
          <p>{workExperience.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default Experience;
