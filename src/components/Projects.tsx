import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

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
    {
      id: 4,
      title: "LeDaniel & Ireme",
      subtitle: "Wedding Website",
      link: "#",
    },
  ];

  return (
    <Container id="Projects">
      <CardGroup>
        {projects.map(({ title, subtitle, link }) => (
          <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
            <Card.Link href={link}>Link</Card.Link>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

export default Projects;
