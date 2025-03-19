import { useState } from 'react'
import logo from './assets/pokeball.png'
import './App.css'
import Card from './Card'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [trackerArray, setTrackerArray] = useState([])

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
          <p>{highScore}</p>
        </div>
      </div>
      <div className='card-container'>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
        <Card current={currentScore} setCurrent={setCurrentScore} record={highScore} setRecord={setHighScore} array={trackerArray} setArray={setTrackerArray}/>
      </div>
    </>
  )
}

export default App
