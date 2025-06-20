import { Card } from 'flowbite-react'
import SectionHeader from '../components/SectionHeader'
import CardTitle from '../components/CardTitle'
import CardSubtitle from '../components/CardSubtitle'
import CardSupertitle from '../components/CardSupertitle'

const Education = () => {
    const education = {
        id: 0,
        name: 'University of California, San Diego 🧜‍♂️',
        years: '2015 - 2019',
        major: 'Major: Mathematics - Computer Science',
        minor: 'Minor: Cognitive Science (Human Computer Interaction)',
        location: 'San Diego, CA.',
    }

    return (
        <div className="scroll-mt-24" id="Education">
            <SectionHeader>Education 🎓</SectionHeader>
            <div className="flex flex-col pt-4">
                <Card className="bg-zinc-900 border-zinc-600">
                    <CardTitle>{education.name}</CardTitle>
                    <CardSubtitle>
                        {education.years}, {education.location}
                    </CardSubtitle>
                    <CardSupertitle>
                        {education.major}, {education.minor}
                    </CardSupertitle>
                </Card>
            </div>
        </div>
    )
}

export default Education
