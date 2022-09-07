import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './style/pokemonDetails.css'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const {name} = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`

    axios.get(URL)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(pokeInfo)
  
  return (
    <article className='card__detail' >
      <div className='card-detail-back'>
        <NavLink to='/pokedex' >
          <i className={`bx bx-arrow-back color-text-${pokeInfo?.types[0].type.name}`}></i>
        </NavLink>
      </div>

      <h3 className={`card__body-name color-text-${pokeInfo?.types[0].type.name}`}>{name}</h3>
      <header className={`bg-${pokeInfo?.types[0].type.name}`}>
        <img className='card_img-header' src={pokeInfo?.sprites.other["official-artwork"]["front_default"]} alt="" />
      </header>

      <section className='card__body-detail'>
        <div className='card__body-content'>
          <p className={`card__body-value color-text-${pokeInfo?.types[0].type.name}`}>{pokeInfo?.weight}</p>
          <span className='card__body-item'>Weight</span>
        </div>
        
        <div className='card__body-content'>
          <p className={`card__body-value color-text-${pokeInfo?.types[0].type.name}`}>{pokeInfo?.height}</p>
          <span className='card__body-item'>Height</span>
        </div>
      </section>
      
      <div className='card__detail-content'>
        <section className='card__detail-info'>
          <h2 className='card__detail-title'>Type</h2>
          <ul className='card__detail-list'>
            <li className='card__detail-item'>
              {
                pokeInfo?.types.map(type => (
                  <span>{type.type.name}</span>
                  ))
                }
            </li>
          </ul>
        </section>
        <section className='card__detail-info'>
          <h2 className='card__detail-title'>Abilities</h2>
          <ul className='card__detail-list'>
            <li className='card__detail-item'>
              {
                pokeInfo?.abilities.map(abilitie => (
                  <span>{abilitie.ability.name}</span>
                  ))
                }
            </li>
          </ul>
        </section>
      </div>

      <section className='card__stat-detail'>
        <h2 className='card__stat-detail-title'>Stat</h2>
        <ul className='card__stat-detail-list'>
          {
            pokeInfo?.stats.map(base => (
              <li className='card__stat-detail-item'>
                <p className={`card__stat-detail-value color-text-${pokeInfo?.types[0].type.name}`}>{base.base_stat}</p>  
                <h3 className='card__stat-detail-name'>{base.stat.name}</h3>
              </li>
            ))
          } 
        </ul>
      </section>

      <div className={`card__detail-movement-container bg-${pokeInfo?.types[0].type.name}`}>
        <section className='card__detail-movement'>
          <h2 className='card__detail-movement-title'>Movements</h2>
            <ul className='card__detail-movement-info-list'>
              <li className='card__detail-movement-info-item'>
                {
                  pokeInfo?.moves.map(movement => (
                    <span> {movement.move.name} </span>
                    ))
                  }
              </li>
            </ul>
        </section>
      </div>
    </article>
  )
}

export default PokemonDetails