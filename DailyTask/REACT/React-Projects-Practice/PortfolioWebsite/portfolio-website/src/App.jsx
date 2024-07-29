import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <main>
        <Home />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App