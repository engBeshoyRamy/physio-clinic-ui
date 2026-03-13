import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Certifications } from './components/sections/Certifications'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}