import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopComp from './components/TopComp'
import Socials from './components/Socials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='profile-card'>
      <TopComp></TopComp>
      <Socials></Socials>
    </div>
  )
}

export default App
