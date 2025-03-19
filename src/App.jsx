import { useState, useEffect } from 'react'
import logo from './assets/pokeball.png'
import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <div className='logo-title-container'>
        <a href="https://pokeapi.co/docs/v2#pokemon" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
      <h1 className='title'>PokéSweeper: The Game</h1>
      </div>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
