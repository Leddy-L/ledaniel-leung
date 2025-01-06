import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SideNavigation from "./components/SideNavigation";
import Footer from "./components/Footer";

import "./styles/index.css";

function App() {
  return (
    <div>
      <Navigation />
      <SideNavigation />
      <div className="ml-80">
        <About />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
