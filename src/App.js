import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import JumpClicker from "./JumpClicker";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <JumpClicker />
      <Header />
      <About />
      <Projects />
      <div style={{ display: "flex" }}> </div>
      <Education />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
