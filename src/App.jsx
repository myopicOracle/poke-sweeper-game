import { useState } from 'react'
import logo from './assets/pokeball.png'
import Card from './Card'
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [trackerArray, setTrackerArray] = useState([])
  const [animateRecord, setAnimateRecord] = useState(false)

  const handleRecordUpdate = (newScore) => {
    if (newScore > highScore) {
      setHighScore(newScore)
      setAnimateRecord(true)
      setTimeout(() => setAnimateRecord(false), 3000)
    }
  }

  return (
    <>
      <div className="scoreboard-container">
        <div className="scoreboard left">
          <h3>Score:</h3>
          <p>{currentScore}</p>
        </div>
        <div className='logo-title-container'>
          <a href="https://pokeapi.co/docs/v2#pokemon" target="_blank">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <h1 className='title'>PokéSweeper</h1>
        </div>
        <div className="scoreboard right">
          <h3>Record:</h3>
          <p style={animateRecord ? { animation: 'highlight 3s ease-in-out' } : {}}>
            {highScore}
          </p>
        </div>
      </div>
      <div className='card-container'>
        {(() => {
          const cards = [];
          for (let i = 0; i < 12; i++) {
            cards.push(
              <Card 
                key={i}
                current={currentScore} 
                setCurrent={setCurrentScore} 
                record={highScore} 
                setRecord={handleRecordUpdate}
                array={trackerArray} 
                setArray={setTrackerArray}
              />
            )}
          return cards;
        })()}
      </div>
    </>
  )
}

export default App
