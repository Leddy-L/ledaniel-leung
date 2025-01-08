import { Card, Carousel } from "flowbite-react";

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
    <div className="h-64">
      <h1>Projects</h1>
      <Carousel slide={false}>
        {projects.map((project: Project) => (
          <a href={project.link} target="_blank" data-carousel-item>
            <div className="bg-zinc-900">
              <div className="absolute transition transform flex flex-col justify-center items-center py-auto h-full w-full bg-zinc-900/80 text-zinc-400 md:bg-transparent md:text-transparent md:hover:bg-zinc-900/80 md:hover:text-zinc-400">
                <h1>{project.title}</h1>
                <h2>{project.subtitle}</h2>
              </div>
              <img className="bg-cover" src={project.thumbnail} alt={project.title} />
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
