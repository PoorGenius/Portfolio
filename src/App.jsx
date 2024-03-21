import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary">
        <div className="min-h-[360px] sm:min-h-[750px]">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
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
