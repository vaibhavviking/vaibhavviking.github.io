import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Music from './components/Music';

function App() {
  return (
    <div className="App">

      <Router baseline="/">

        <Navbar />
        <Routes>

          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/about' element={<About />}>

          </Route>
          <Route path='/skills' element={<Skills />}>

          </Route>
          <Route path='/projects' element={<Projects />}>

          </Route>
        </Routes>
        <Music />
      </Router>
    </div>
  );
}

export default App;
