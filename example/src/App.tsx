import React from 'react'

import SimpleTree from './containers/SimpleTree'
import SelectionTree from './containers/SelectionTree'

const App = () => {
  return (
    <div>
      <h1>Simple Tree</h1>
      <SimpleTree />

      <h1>Tree with Selection</h1>
      <SelectionTree />
    </div>
  )
}

export default App
