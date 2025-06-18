import { Card } from "flowbite-react";
import SectionHeader from "../components/SectionHeader";

const Education = () => {
    const education = {
        id: 0,
        name: "University of California, San Diego",
        years: "2015 - 2019",
        major: "Major: Mathematics - Computer Science",
        minor: "Minor: Cognitive Science (Human Computer Interaction)",
        location: "San Diego, CA.",
        description: "I learned. A lot."
    }

    return (
        <div id="Education">
            <SectionHeader>Education 🎓</SectionHeader>
            <div className="flex flex-col pt-4">
                <Card className="bg-zinc-900 border-zinc-600">
                    <h1>{education.name}</h1>
                    <h2>{education.years}</h2>
                    <h2>{education.major}</h2>
                    <h2>{education.minor}</h2>
                    <h2>{education.location}</h2>
                    <p>{education.description}</p>
                </Card>

            </div>
        </div>
    );
};

export default Education;
