import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import { FetchAsync } from './asynccomponenet/fetch'
import { FetchComponent } from './component/fetch'

function App() {
  

  return (
    <div className="App">
     <FetchComponent/> 
      {/* <FetchAsync/> */}
    </div>
  )
}

export default App
