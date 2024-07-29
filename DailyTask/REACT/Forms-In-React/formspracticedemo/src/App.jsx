import React from 'react'
import CreateSimpleForm from './assets/components/Forms/CreateSimpleForm'
import ReactFormHookDemo from './assets/components/Forms/ReactFormHookDemo'
import ('./App.css');

const App = () => {
  return (
    <>
      <CreateSimpleForm />
      <hr />
      <ReactFormHookDemo />
    </>
  )
}

export default App