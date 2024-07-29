import React from 'react'
import LoginForm from './components/LoginForm'
import Colors from './components/Colors'
import UseEffectsDemo from './components/UseEffectsDemo'
import CustomHooks from './components/CustomHooks'

const App = () => {
  return (
      <>
        <LoginForm />
        <Colors />
        <UseEffectsDemo />
        <hr />
        <h2>Example Custom Hooks</h2>
        <CustomHooks />
      </>
  )
}

export default App