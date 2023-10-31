import './App.css'
import { useState } from 'react'
import Counter from './components/Counter'

export default function App() {
  //js
  //const [movies, setMovies] = useState([1,2,3])
  const [isOpen, setIsOpen] = useState(false)

  //xml
  return (
    <div className='App'>
      <h1>Hello React!</h1>
      {/* <div>{movies}</div> */}
      <button onClick={() => setIsOpen(!isOpen)}>열기</button>
      {isOpen && <Counter />}
    </div>
  )
}

