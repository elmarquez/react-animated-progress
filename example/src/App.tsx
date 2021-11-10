import React from 'react'

import ProgressBar from 'react-progress-bar'
import 'react-progress-bar/dist/index.css'

const App = () => {
  return (
    <div style={{ width: '750px', margin: '40px' }}>
      <ProgressBar value={30} isStriped={true} />
    </div>
  )
}

export default App
