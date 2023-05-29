import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>

          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/about' >
            <About />
          </Route>
          <Route path='/skills' >
            <Skills />
          </Route>
          <Route path='/projects' >
            <Projects />
          </Route>
        </Switch>
        <Music />
      </Router>
    </div>
  );
}

export default App;
