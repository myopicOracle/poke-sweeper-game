# PokéSweeper

A solo project for a memory card game built during The Odin Project's [React module](https://www.theodinproject.com/paths/full-stack-javascript/courses/react) on states and effects.

[Project Guidelines](https://www.theodinproject.com/lessons/node-path-react-new-memory-card)

## Version 2.0

![PokéSweeper Version 2.0](src/assets/pokesweeper_v2.png)

### [Live Demo - https://poke-sweeper.netlify.app/](https://poke-sweeper.netlify.app/)

## Purpose

This project was created to practice React hooks and external API integration. The main challenge was implementing state management for a memory game where players click on Pokémon cards without selecting the same one twice.

## What I Learned

- **useState Hook**: Managing game state including current score, high score, and tracking clicked cards
- **useEffect Hook**: Fetching Pokémon data from the PokéAPI when component mounts or updates
- **External API Integration**: Working with the PokéAPI to fetch random Pokémon data and images
- **Component Communication**: Passing state and functions between parent and child components
- **Conditional Rendering**: Handling game logic for score tracking and game resets

## How It Works

1. **Game Mechanics**: Click Pokémon cards to increase your score, but clicking the same card twice resets your current score
2. **API Integration**: Each card fetches random Pokémon data from PokéAPI
3. **State Management**: Tracks current score, high score, and clicked cards using React hooks
4. **Randomization**: Cards display new random Pokémon after each selection

## Technical Details

- **React Hooks**: useState, useEffect
- **API**: PokéAPI (pokeapi.co)
- **Styling**: CSS with animations for score updates
- **Components**: App.jsx (main game logic), Card.jsx (individual card components)

## Project Structure

```
src/
├── App.jsx          # Main game component with score tracking
├── Card.jsx          # Individual card component with API fetching
├── App.css           # Game styling and animations
└── assets/           # Static assets (logo, etc.)
```

## PokeAPI
- API: pokeapi.co
- https://pokeapi.co/docs/v2
- *GET Request:* [https://pokeapi.co/api/v2/pokemon/{id or name}/](https://pokeapi.co/api/v2/pokemon/1/)



---
> *A solo project built during [The Odin Project](https://www.theodinproject.com/)*

> *[Netlify Permalink](https://poke-sweeper.netlify.app/)* | *last deployed: March 17, 2025*