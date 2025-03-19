import { useState, useEffect } from "react"

export default function Card() {
  const randomNumber = Math.floor(Math.random() * 30)
  const [randomId, setRandomId] = useState(randomNumber)
  const [pokemon, setPokemon] = useState({
    name: "Pika Pika!",
    imgUrl: "https://pokeapi.co/api/v2/pokemon/pikachu"
  })

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}/`
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
  }, [randomId])   

  const nextCard = () => {
    setRandomId(randomNumber)
  }

  return (
    <div className="card">
      <h3 className="name">{pokemon.name}</h3>
      <img src={pokemon.imgUrl} alt="" />
      <button onClick={nextCard}>Select</button>
    </div>
  )
}