import { useState, useEffect } from 'react'
import logo from './assets/pokeball.png'
import borat from './assets/borat.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [pokemon, setPokemon] = useState({
    name: "Pokémon Eez Niice!!",
    imgUrl: borat,
  })

  useEffect(() => {    
    const url = `https://pokeapi.co/api/v2/pokemon/${count}/`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPokemon((prevPoke) => ({
          ...prevPoke,
          name: data.name
        }))
        setPokemon((prevPoke) => ({
          ...prevPoke,
          imgUrl: data.sprites.other.dream_world.front_default
        }))
      })
    }, [count])

  return (
    <>
      <div className='logo-title-container'>
        <a href="https://pokeapi.co/docs/v2#pokemon" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
      <h1 className='title'>PokéSweeper: The Game</h1>
      </div>
      <div className='card-container'>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.imgUrl} className="card" alt='A Pokémon' />
      </div>
      <div className="button-container">
        <button onClick={() => (count > 0) && setCount((count) => count - 1)}>
          Last Pokémon
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Next Pokémon
        </button>
      </div>
    </>
  )
}

export default App
