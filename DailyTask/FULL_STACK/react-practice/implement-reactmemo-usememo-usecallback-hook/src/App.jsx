import React from 'react'
import ReactMemo from './components/ReactMemo'
import UseCallback from './components/UseCallback'

const App = () => {
  return (
    <div>
      {/* <h2>React.memo and useMemo Example</h2>
      <ReactMemo /> */}

      <h2>useCallback Example</h2>
      <UseCallback />
    </div>
  )
}

export default App