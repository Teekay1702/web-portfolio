import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScroll } from './hooks/useScroll';

export default function App() {
  const navigate = useScroll();
  return <>
    <Header onNavigate={navigate} /><main id="top">
      <Hero onNavigate={navigate} />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
    <Footer onNavigate={navigate} />
  </>
}
