import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SlEmotsmile } from "react-icons/sl";
import './App.css'

function App() {

  return (
    <div className="w-full h-full">
      <div className='w-full flex justify-center items-center p-10'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-7xl'>Vite + React</h1>
      <div className="card">
        <p>
          권오현, whose name also can be written as Kwon Ohyeon and 權五玹
        </p>
      </div>
      <p className="flex justify-center text-9xl text-amber-300">
        <SlEmotsmile />
      </p>
    </div>
  )
}

export default App
