import Navigation from "./components/navigation/Navigation";
import PageBanner from "./components/navigation/PageBanner";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import PageFooter from "./components/navigation/Footer";
import Education from "./sections/Education";

import "./styles/index.css";

function App() {
  return (
    <div className="bg-zinc-900 text-zinc-200">
      <Navigation />
      {/* below should be a "page" and each page can be created of components */}
      <div className="p-10 mt-16 w-full md:w-4/5 md:ml-[20%]">
        {/* <PageBanner /> */}
        <div className="flex flex-col space-y-8">
          <About />
          <Experience />
          <Projects />
          <Education />
          <PageFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
