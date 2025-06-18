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
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">LeDaniel Leung - <span>{identities[0]}</span></h1>
            <p className="mt-2 text-md sm:text-lg md:text-2xl text-zinc-400">Get to know this intrepid human of the internet by seeing what he's done.</p>
        </div >
    );
};

export default About;
