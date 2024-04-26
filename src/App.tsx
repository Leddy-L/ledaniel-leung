import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

import "./styles/App.scss";

function App() {
  return (
    <div id="App">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Sidebar />
    </div>
  );
}

export default App;
