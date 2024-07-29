import React from 'react'
import StyleDemo from './components/Style/StyleDemo'
import PropsDemo from './components/Props/PropsDemo'
import { useState } from 'react'

const App = () => {
  // const propsData = () => {
  //   document.write("Kuldeep");
  // }
  
  // const [message, setMessage] = useState('');
  // const handledData = (name, designation) => {
  //     setMessage(`Name: ${name}, Designation: ${designation}`);
  // }
  return (
    <>
      <StyleDemo />
      <PropsDemo name="Kuldeep" designation="Developer" />
      {/* <PropsDemo  /> (default props use when not passed props) */}
      
      {/* props data send using function */}
      {/* <PropsDemo  propsData={propsData} /> */}

      {/* <PropsDemo sendData = {handledData} />
      {message && <p>{message}</p>} */}
    </>
  )
}

export default App