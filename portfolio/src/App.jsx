import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './components/about/About'
import { Home } from './components/home/Home'
import { NotFoundPage } from './components/NotFoundPage'

function App() {

  return (
    <div className="App">
      <div className='contenedor'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='*' element={ <NotFoundPage/> } />
            <Route path='/about' element={ <About/> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
