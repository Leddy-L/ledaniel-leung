import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./styles/index.css";

function App() {
  return (
    <div id="App">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
