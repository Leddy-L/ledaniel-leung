import Title from '../components/Title'
import Subtitle from '../components/Subtitle'

const About = () => {
    const identities = [
        "Software Engineer",
        "Pianist for Hire",
        "Aspiring Artist",
        "Games Enthusiast",
        "Servant to 2 Cats",
        "Retired Barber",
        "etc."
    ];

    return (
        <div className="border-b border-zinc-600 pb-8" id="About">
            <Title>LeDaniel Leung - <span>{identities[0]}</span></Title>
            <Subtitle>Get to know this intrepid human of the internet by seeing what he's done.</Subtitle>
        </div >
    );
};

export default About;
