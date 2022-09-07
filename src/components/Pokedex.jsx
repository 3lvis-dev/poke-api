import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import './style/pokedex.css'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  const getAllPokemons = () => {
    if (optionType !== 'All'){
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
      .then(res => {
        const arr = res.data.pokemon.map((e) => e.pokemon)
        setPokemons({results: arr})
      }) 
      .catch(err => console.log(err))

    } else if (pokeSearch){
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results: [{url}]
      }
      setPokemons(obj)

    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
      .then(res => setPokemons(res.data)) 
      .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    getAllPokemons()
  }, [pokeSearch, optionType])
  
  const nameTrainer = useSelector(state => state.nameTrainer)
  
  return (
    <div className='pokedex__container'>

      <div className='pokedex__form'>
        <h2 className='pokedex__form-title'>Welcome trainer <span>{nameTrainer}</span>, Ready to catcha them all</h2>

        <div className='pokedex__form-content'>
          <div className='pokedex__select'>
            <SearchInput 
              setPokeSearch={setPokeSearch} 
              setOptionType={setOptionType}
              />
          </div>

          <div className='pokedex__select'>
            <SelectType 
              optionType={optionType}
              setOptionType={setOptionType} 
              setPokeSearch={setPokeSearch} 
              />
          </div>
        </div>
      </div>

      <div className='cards-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>

    </div>    
  )
}

export default Pokedex