import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from './components';

import StarsCanvas from './components/Canvas/Stars';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary overflow-x-hidden">
        <div className="min-h-[360px]">
          <Navbar />
          <Hero />
        </div>
        <div className="w-full flex justify-center">
          <div className="lg:w-[1440px] bg-black relative w-full">
            <About />
            <StarsCanvas />
          </div>
        </div>

        <div>
          <Skills />
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
