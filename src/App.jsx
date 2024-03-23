import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from './components';

import StarsCanvas from './components/Canvas/Stars';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary overflow-x-hidden">
        <div className="w-full flex justify-center">
          <div className="min-h-[360px]">
            <Navbar />
            <Hero />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-black relative w-full">
            <About />
            <StarsCanvas />
          </div>
        </div>
        <div className="black__gradient w-full">
          <Skills />
        </div>
        <div className="w-full flex justify-center">
          <Projects />
        </div>
        <div>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
