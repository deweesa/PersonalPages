import './App.css';
import Navbar from './components/Navbar';
import Spotlight from './components/Spotlight'
import ExperienceList from './components/ExperienceList'
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="text-green-50 bg-green-950">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-12 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="w-1/2 lg:top-0 lg:sticky lg:max-h-screen lg:py-24">
            <Spotlight />
            <Navbar />
          </div>
          <div className="w-1/2 pt-24">
            <About />
            <ExperienceList />
            <Projects /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;