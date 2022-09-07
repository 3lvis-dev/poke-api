import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'

const Home = () => {
  const dispatch = useDispatch()
  const nagivate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim();

    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue))
      nagivate('/pokedex')
    }
    e.target.name.value = ""
  }

  return (
    <div className='home__container'>
      <div className='capa'>
        <div className='home__content'>
          <img src="public/img/logo-pokedex.svg" alt="image home" />
          <h2 className='home__title'>Hi, trainer</h2>
          <p className='home__paragraph'>To start give me your name</p>
          <form onSubmit={handleSubmit} className='home__form'>
            <input id='name' type="text" placeholder='Write your name as a Trainer...' />
            <button>Start</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home