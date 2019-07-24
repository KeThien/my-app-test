import React from 'react'
import './App.css'
import TakeDateCard from './components/TakeDateCard'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 mt-5">
            <TakeDateCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
