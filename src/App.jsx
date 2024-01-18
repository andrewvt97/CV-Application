import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PersonalInfo from './PersonalInfo'
import PersonalInput from './PersonalInput.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class = "main-page">
      <PersonalInfo></PersonalInfo>
      <PersonalInput></PersonalInput>
    
    
    </div>
      
  )
}

export default App
