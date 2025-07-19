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
    emoji: string
    subtitle: string
    link: string
    disabled: boolean
    description: string
    thumbnail?: string
    target: string
}

const Projects = () => {
    const projects = [
        {
            id: 0,
            title: 'LKC Puzzle Room',
            emoji: '🧩',
            subtitle: 'LKC Activities',
            link: '/lkc-puzzle-room',
            disabled: false,
            description:
                'A solo-developed Unity escape room game blending interactive puzzles, playful design, and purpose-driven storytelling.',
            thumbnail: lkc_puzzle_room_thumbnail,
            target: '_self',
        },
        {
            id: 1,
            title: 'Random Word Generator',
            emoji: '🔤',
            subtitle: 'LKC Activities',
            link: '/lkc-random-word-generator',
            disabled: false,
            description:
                'A kid-friendly Unity game that mixes spelling, numbers, and silly word prompts to spark creativity and learning.',
            thumbnail: random_word_generator_thumbnail,
            target: '_self',
        },
        {
            id: 2,
            title: 'Camellia Rd',
            emoji: '🧋',
            subtitle: 'UCSD COGS 187B',
            link: 'https://camelliard.github.io/',
            disabled: false,
            description:
                'Mockup design project for San Diego-based boba tea shop.',
            thumbnail: camellia_rd_thumbnail,
            target: '_blank',
        },
    ]

    return (
        <div className="scroll-mt-24" id="Projects">
            <SectionHeader>Projects 💡</SectionHeader>
            <div className="flex flex-row pt-4 space-x-4 flex-nowrap overflow-x-scroll">
                {projects.map((project: IProject) => (
                    <Card
                        className="bg-zinc-900 border-zinc-600 min-w-60 max-w-60 md:min-w-96 md:max-w-96 horizontal"
                        imgAlt={project.title}
                        imgSrc={project.thumbnail}
                        key={project.id}
                    >
                        <CardTitle>
                            {project.title} {project.emoji}
                        </CardTitle>
                        <CardSubtitle>{project.subtitle}</CardSubtitle>
                        <CardText>{project.description}</CardText>
                        <Button
                            pill
                            color="dark"
                            href={project.disabled ? '' : project.link}
                            target={project.target}
                            disabled={project.disabled}
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
