import About from '../sections/About'
import Education from '../sections/Education'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import PageFooter from '../components/navigation/Footer'

const Landing = () => {
    return (
        <div className="flex flex-col space-y-8">
            <About />
            <Experience />
            <Projects />
            <Education />
            <PageFooter />
        </div>
    )
}
export default Landing
