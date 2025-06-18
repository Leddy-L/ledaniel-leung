import { Card } from "flowbite-react";
import SectionHeader from "../components/SectionHeader";

import lkc_puzzle_room_thumbnail from "../img/lkc-puzzle-room-thumbnail.png";
import random_word_generator_thumbnail from "../img/random-word-generator-thumbnail.png";
import camellia_rd_thumbnail from "../img/camellia-rd-thumbnail.png";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  thumbnail?: string;
}

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "LKC Puzzle Room",
      subtitle: "LKC Activities",
      link: "https://asianu.github.io/lkc-puzzle-room/",
      thumbnail: lkc_puzzle_room_thumbnail
    },
    {
      id: 1,
      title: "Random Word Generator",
      subtitle: "LKC Activities",
      link: "https://asianu.github.io/random-word-generator/",
      thumbnail: random_word_generator_thumbnail
    },
    {
      id: 2,
      title: "Camellia Rd",
      subtitle: "UCSD COGS 187B",
      link: "https://camelliard.github.io/",
      thumbnail: camellia_rd_thumbnail
    }
  ];

  return (
    <div id="Projects">
      <SectionHeader>Projects 💡</SectionHeader>
      <div className="flex flex-row pt-4 space-x-4 flex-nowrap overflow-x-scroll">
        {projects.map((project: Project) => (
          <Card className="bg-zinc-900 border-zinc-600 min-w-48 max-w-48 md:min-w-96 md:max-w-96" imgAlt={project.title} imgSrc={project.thumbnail} >
            <h1>{project.title}</h1>
            <h2>{project.subtitle}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
