import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style/SearchSelect.css'


const SelectType = ({ setOptionType, optionType, setPokeSearch }) => {

  const [listTypes, setListType] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'

    axios.get(URL)
      .then(res => setListType(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleChange = (e) => {
    setOptionType(e.target.value);
    setPokeSearch('')
  }

  return (
    <div className='select'>
      <select value={optionType} onChange={handleChange}>
        <option value="All">All Pokemons</option>
        {
          listTypes?.map((type) => ( 
            <option key={type.name} value={type.name}>{type.name}</option>
            )) 
          }
      </select>
    </div>
  )
}

export default SelectType