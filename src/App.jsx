import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoutes from './components/ProtectedRoutes'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={< PokemonDetails />} />
        </Route>
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
