import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Certifications from './pages/Certifications/Certifications';
import './style.css';

function App() {
  return (
    <>
      <Header/>

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id='certifications'>
          <Certifications/>
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
