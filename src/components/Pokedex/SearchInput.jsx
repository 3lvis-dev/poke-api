import React from 'react'
import './style/SearchSelect.css'

const SearchInput = ({setPokeSearch, setOptionType}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ""
  }

  return (
    <form className='form__search' onSubmit={handleSubmit}>
      <input className='form__search-input' id='searchText' type="text" />
      <button className='form__search-btn'>Search</button>
    </form>
  )
}

export default SearchInput