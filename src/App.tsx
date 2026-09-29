import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Exploring from './components/Exploring'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Exploring />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
