import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Navigation from './components/navigation/Navigation'
import Projects from './sections/Projects'
import PageFooter from './components/navigation/Footer'

import './styles/index.css'

function App() {
    return (
        <div className="bg-zinc-900 text-zinc-200">
            <Navigation />
            <div className="p-10 mt-16 w-full md:w-4/5 md:ml-[20%]">
                <div className="flex flex-col space-y-8">
                    <About />
                    <Experience />
                    <Projects />
                    <Education />
                    <PageFooter />
                </div>
            </div>
        </div>
    )
}

export default App
