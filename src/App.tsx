import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScroll } from './hooks/useScroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CV from './pages/CV';

function Portfolio() {
  const navigate = useScroll();
  return (
    <>
      <Header onNavigate={navigate} />
      <main id="top">
        <Hero onNavigate={navigate} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer onNavigate={navigate} />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}