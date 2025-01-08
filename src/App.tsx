import Navigation from "./components/Navigation";
import PageBanner from "./components/PageBanner";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import PageFooter from "./components/Footer";
import Education from "./components/Education";

import "./styles/index.css";

function App() {
  return (
    <div className="bg-zinc-900 text-zinc-50">
      <Navigation />
      {/* below should be a "page" and each page can be created of components */}
      <div className="px-20 pb-20 pt-40 w-full md:w-4/5 md:ml-[20%]">
        <PageBanner />
        <div className="flex flex-col mt-[30%] md:mt-[36%] space-y-8">
          <Projects />
          <Experience />
          <Education />
          <PageFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
