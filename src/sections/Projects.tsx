import { Button, Card } from 'flowbite-react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import CardText from '../components/CardText'
import CardTitle from '../components/CardTitle'
import CardSubtitle from '../components/CardSubtitle'
import SectionHeader from '../components/SectionHeader'

import lkc_puzzle_room_thumbnail from '../img/lkc-puzzle-room-thumbnail.png'
import random_word_generator_thumbnail from '../img/random-word-generator-thumbnail_small.png'
import camellia_rd_thumbnail from '../img/camellia-rd-thumbnail_small.png'

interface IProject {
    id: number
    title: string
    subtitle: string
    link: string
    description: string
    thumbnail?: string
}

const Projects = () => {
    const projects = [
        {
            id: 0,
            title: 'LKC Puzzle Room',
            subtitle: 'LKC Activities',
            link: 'https://ledanielleung.com/lkc-puzzle-room/',
            description:
                'Escape Room-style puzzle made for kids as a group activity. Made during lockdown.',
            thumbnail: lkc_puzzle_room_thumbnail,
        },
        {
            id: 1,
            title: 'Random Word Generator',
            subtitle: 'LKC Activities',
            link: 'https://ledanielleung.com/random-word-generator/',
            description:
                'Generate silly art prompts for kids. Made during lockdown.',
            thumbnail: random_word_generator_thumbnail,
        },
        {
            id: 2,
            title: 'Camellia Rd',
            subtitle: 'UCSD COGS 187B',
            link: 'https://camelliard.github.io/',
            description:
                'Mockup design project for San Diego-based boba tea shop.',
            thumbnail: camellia_rd_thumbnail,
        },
    ]

    return (
        <div id="Projects">
            <SectionHeader>Projects 💡</SectionHeader>
            <div className="flex flex-row pt-4 space-x-4 flex-nowrap overflow-x-scroll">
                {projects.map((project: IProject) => (
                    <Card
                        className="bg-zinc-900 border-zinc-600 min-w-60 max-w-60 md:min-w-96 md:max-w-96 horizontal"
                        imgAlt={project.title}
                        imgSrc={project.thumbnail}
                        key={project.id}
                    >
                        <CardTitle>{project.title}</CardTitle>
                        <CardSubtitle>{project.subtitle}</CardSubtitle>
                        <CardText>{project.description}</CardText>
                        <Button
                            pill
                            color="dark"
                            href={project.link}
                            target="_blank"
                        >
                            Explore
                            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Projects
