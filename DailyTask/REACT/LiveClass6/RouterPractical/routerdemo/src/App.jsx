import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import './App.css';
import Topic from './components/Topic';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:topicName' element={<Topic />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App