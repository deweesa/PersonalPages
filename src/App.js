import './App.css';
import Navbar from './components/Navbar';
import Spotlight from './components/Spotlight'
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    //<div className="flex flex-row align content text-green-50 bg-green-950 min-h-screen">
    <div className="md:columns-2 align content text-green-50 bg-green-950 min-h-screen">
      <div className="">
        <Spotlight />
        <Navbar />
      </div>
      <div className="">
        <About />
        <Experience />
        <Projects /> 
      </div>
    </div>
  );
}

export default App;