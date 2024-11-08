import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Acheivements from './components/Acheivements';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className="main-content">
        <main>
          <Home />
          <Projects />
          <Acheivements />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App;
