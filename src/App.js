import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Spotlight from './components/Spotlight'
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Spotlight />
      <Experience />
      <Projects /> 
    </div>
  );
}

export default App;
