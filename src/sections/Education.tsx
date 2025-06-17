import { Card } from "flowbite-react";

interface Experience {
    id: Number,
    name: String,
    logo?: ImageData,
    years: String,
    major: String,
    minor: String
    location: String,
    description: String,
    icons?: Array<ImageData>
}

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
            <h1>Education</h1>
            <Card className="bg-zinc-900">
                <div>
                    <h1>{education.name}</h1>
                    <h2>{education.years}</h2>
                    <h2>{education.major}</h2>
                    <h2>{education.minor}</h2>
                    <h2>{education.location}</h2>
                    <p>{education.description}</p>
                </div>
            </Card>
        </div>
    );
};

export default Education;
