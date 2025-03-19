import { useState, useEffect } from "react"

export default function Card({ current, setCurrent, record, setRecord, array, setArray }) {
  const randomNumber = () => Math.floor(Math.random() * 30)
  const [randomId, setRandomId] = useState(randomNumber())
  const [pokemon, setPokemon] = useState({
    name: "pikachu",
    imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  })

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}/`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          imgUrl: data.sprites.other.dream_world.front_default
        })
      })
  }, [randomId])   

  const nextCard = () => {

    if (array.includes(randomId)) {
      setArray([])
      setCurrent(0)

    } else {

      const newArray = [...array, randomId]
      setArray(newArray)

      const newScore = current + 1
      setCurrent(newScore)

      newScore > record && setRecord(prevRecord => prevRecord + 1)
    }

    setRandomId(randomNumber())
  }

  return (
    <div className="card">
      <h3 className="name">{pokemon.name}</h3>
      <img src={pokemon.imgUrl} alt="" />
      <button onClick={nextCard}>Select</button>
    </div>
  )
}