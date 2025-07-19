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
    description: any
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
            description: (
                <div>
                    <p className="pb-2">
                        I currently support the Qualcomm Software Automation
                        Team (QSWAT) by building internal tools that enhance and
                        streamline configuration management workflows for
                        engineering teams. Collaborate cross-functionally with
                        global teams to ensure smooth integration of tools into
                        daily development processes.
                    </p>
                    <strong>Key Responsibilities</strong>
                    <ul className="pl-2 list-disc list-inside">
                        <li>
                            Developed and maintained internal software tools to
                            support engineers' configuration management systems.
                        </li>
                        <li>
                            Improved workflows related to code check-ins, change
                            management, and product configuration.
                        </li>
                        <li>
                            Collaborated with teams in San Diego and Hyderabad
                            to support global engineering operations.
                        </li>
                        <li>
                            Contributed to the automation and scalability of
                            software infrastructure used across multiple product
                            teams.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: 1,
            name: 'Northrop Grumman 🚁',
            years: '2019 - 2022',
            title: 'Systems Engineer',
            location: 'San Diego, CA.',
            description: (
                <div>
                    <p className="pb-2">
                        Began as an intern and transitioned to a full-time role
                        supporting middleware communications systems for
                        avionics platforms. Focused on reverse-engineering
                        legacy software-defined radio (SDR) solutions,
                        validating system requirements, and automating data
                        workflows to support engineering and testing efforts.
                    </p>
                    <strong>Key Responsibilities</strong>
                    <ul className="pl-2 list-disc list-inside">
                        <li>
                            Reverse-engineered system design and requirements
                            documentation for legacy SDR communications
                            software.
                        </li>
                        <li>
                            Created and executed test cases to verify
                            functionality and compliance with system
                            specifications.
                        </li>
                        <li>
                            Collaborated with international partners to validate
                            and refine system-level requirements.
                        </li>
                        <li>
                            Independently maintained and operated the lab
                            environment for integration and testing.
                        </li>
                        <li>
                            As an intern, developed Python-based tools to
                            automate data extraction and analysis workflows.
                        </li>
                    </ul>
                </div>
            ),
        },
    ]

    // see https://flowbite-react.com/docs/components/timeline for timeline-type of view

    return (
        <div className="scroll-mt-24" id="Experience">
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
