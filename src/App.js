import React, { useState } from 'react'
import Cron from './lib'

const App = () => {
  const [value, setValue] = useState()

  return (
    <div>
      <Cron
        onChange={(e) => { setValue(e); console.log(e) }}
        value={value}
        showResultText={true}
        showResultCron={true}
      />
    </div>
  )
}

export default App
