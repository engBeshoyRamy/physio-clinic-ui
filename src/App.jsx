import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Certifications } from './components/sections/Certifications'
import { Skills } from './components/sections/Skills'
import { Gallery } from './components/sections/Gallery'
import { Contact } from './components/sections/Contact'
import { FloatingCTA } from './components/ui/FloatingCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-body">
      <Navbar />
      <main>
        {/* Hero — white */}
        <Hero />

        {/* About — light gray */}
        <About />

        {/* Experience — white */}
        <Experience />

        {/* Certifications — white (high-impact credibility section) */}
        <Certifications />

        {/* Skills — light gray */}
        <Skills />

        {/* Clinical Gallery */}
        <Gallery />

        {/* Contact — white */}
        <Contact />

        {/* Gallery hidden until real clinical photos are ready */}
        {/* <Gallery /> */}
      </main>
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingCTA />
    </div>
  )
}