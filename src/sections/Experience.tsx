import { Card } from 'flowbite-react'
import SectionHeader from '../components/SectionHeader'
import CardText from '../components/CardText'
import CardTitle from '../components/CardTitle'
import CardSubtitle from '../components/CardSubtitle'

interface IExperience {
    id: number
    name: string
    logo?: ImageData
    years: string
    title: string
    location: string
    description: string
    technologies?: Array<ImageData>
}

const Experience = () => {
    const workExperience = [
        {
            id: 0,
            name: 'Qualcomm 📲',
            years: '2022 - Present',
            title: 'Software Engineer',
            location: 'San Diego, CA.',
            description:
                'I currently support the Software Automation and Tools (QSWAT) team by driving feature implementation, optimizing legacy applications, and supporting users daily.',
        },
        {
            id: 1,
            name: 'Northrop Grumman 🚁',
            years: '2019 - 2022',
            title: 'Systems Engineer',
            location: 'San Diego, CA.',
            description:
                'As an intern-to-fulltime hire, I worked on various middleware applications that supported the communications systems on avionic vehicles.',
        },
    ]

    // see https://flowbite-react.com/docs/components/timeline for timeline-type of view

    return (
        <div id="Experience">
            <SectionHeader>Experience 🏋️‍♂️</SectionHeader>
            <div className="flex flex-col pt-4 space-y-4">
                {workExperience.map((workExperience: IExperience) => (
                    <Card
                        className="bg-zinc-900 border-zinc-600"
                        key={workExperience.id}
                    >
                        <CardTitle>
                            {workExperience.name} - {workExperience.title}
                        </CardTitle>
                        <CardSubtitle>
                            {workExperience.years}, {workExperience.location}
                        </CardSubtitle>
                        <CardText>{workExperience.description}</CardText>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Experience
