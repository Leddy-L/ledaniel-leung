import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

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
    <Container id="Projects">
      {projects.map((project) => (
        <Card key={project.id}>
          <Card.Body>
            <Card.Title>
              <a href={project.link} target="_blank">
                {project.title}
              </a>
            </Card.Title>
            <Card.Text>{project.subtitle}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;
