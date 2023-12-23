import React from "react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  link: string;
}

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "Random Word Generator",
      subtitle: "LKC Activities",
      link: "https://asianu.github.io/lkc-puzzle-room/",
    },
    {
      id: 1,
      title: "Puzzle Room",
      subtitle: "LKC Activities",
      link: "https://asianu.github.io/random-word-generator/",
    },
    {
      id: 2,
      title: "Launchpad",
      subtitle: "UCSD CSD 170",
      link: "https://cse170-launchpad.firebaseapp.com/",
    },
    {
      id: 3,
      title: "Camellia Rd",
      subtitle: "UCSD COGS 187B",
      link: "https://camelliard.github.io/",
    },
  ];

  return (
    <div className="projects">
      {projects.map((project) => (
        <div key={project.id}>
          <p>
            <a href={project.link} target="_blank">
              {project.title}
            </a>
          </p>
          <p>{project.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
