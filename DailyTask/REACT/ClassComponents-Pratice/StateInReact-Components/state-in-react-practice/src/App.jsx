import React, { Component } from 'react'
import StateDetails from './components/StateDetails'
import Counter from './components/Counter'
import DetailsWithForm from './components/DetailsWithForm'
import ShowHide from './components/ShowHide'

export class App extends Component {
  render() {
    return (
      <>
      <StateDetails />
      <Counter />
      <DetailsWithForm />
      <ShowHide />
      </>
    )
  }
}

export default App