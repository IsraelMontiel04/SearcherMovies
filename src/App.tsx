/* import { useState } from 'react' */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage'
import SingleMovie from './components/SingleMovie'


function App() {
  /* https://www.omdbapi.com/?apikey=22ef7076&s=troya */
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/movies/:id' element={<SingleMovie/>} />
        </Routes>
        </BrowserRouter>     
      </div>
    </>
  )
}

export default App
