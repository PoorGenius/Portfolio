import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from './components';

import StarsCanvas from './components/Canvas/Stars';

const App = () => {
  return (
    <div className="relative bg-primary overflow-x-hidden">
      <div className="w-full flex justify-center">
        <div className="min-h-[360px]">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div id="about" className="bg-black relative w-full">
          <About />
          <StarsCanvas />
        </div>
      </div>
      <div id="skills" className="black__gradient w-full">
        <Skills />
      </div>
      <div id="projects" className="w-full flex justify-center">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
