import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Locations from './components/Locations';
import Form from './components/Form';
import Student from './components/Student';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact/' element={<Contact/>}>
              <Route path='location' element={<Locations />} />
              <Route path='form' element={<Form />} />
          </Route>
          <Route path='/student/:name' element={<Student />} />
          <Route path='/info' element={<h1>This is a Info Page</h1>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App