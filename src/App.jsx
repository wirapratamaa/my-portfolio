import { About } from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="scrollbar-hide">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <div className="mt-4"></div>
    </div>
  );
}

export default App;
