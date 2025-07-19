import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Typewriter from 'typewriter-effect'

const About = () => {
    const identities = [
        'Software Engineer',
        'Pianist for Hire',
        'Aspiring Artist',
        'Games Enthusiast',
        'Servant to 2 Cats',
        'Retired Barber',
    ]

    const swapIndices = function (index1: number, index2: number) {
        let tmp = identities[index1]
        identities[index1] = identities[index2]
        identities[index2] = tmp
    }

    const shuffleIdentities = function (shuffleCount: number) {
        for (var i = 0; i < shuffleCount; i++) {
            let index =
                (Math.trunc(Math.random() * i) % (identities.length - 1)) + 1
            if (index === identities.length - 1) {
                swapIndices(index, 1)
            } else {
                swapIndices(index, index + 1)
            }
        }
    }

    return (
        <div className="border-b border-zinc-600 pb-8 scroll-mt-24" id="About">
            <Title>
                <Typewriter
                    options={{
                        cursor: '✨',
                        loop: false,
                        delay: 96,
                        deleteSpeed: 36,
                        autoStart: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('LeDaniel Leung - ')
                        typewriter
                            .pauseFor(500)
                            .typeString(identities[0])
                            .pauseFor(1500)
                            .deleteChars(identities[0].length)

                        shuffleIdentities(100)

                        for (var i = 1; i < identities.length; i++) {
                            typewriter
                                .pauseFor(500)
                                .typeString(identities[i])
                                .pauseFor(1500)
                                .deleteChars(identities[i].length)
                        }

                        typewriter
                            .pauseFor(500)
                            .typeString(identities[0])
                            .start()
                    }}
                />
            </Title>
            <Subtitle>Just a place to put my stuff on the internet.</Subtitle>
        </div>
    )
}

export default About
