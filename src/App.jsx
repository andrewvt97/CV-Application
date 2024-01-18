import { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import PersonalInput, { initialPerson } from './PersonalInput.jsx'
import EducationInfo from './EducationInfo.jsx'
import './App.css'

function App() {

  const [person, setPerson] = useState(initialPerson);

  return (
    <div class = "main-page">
      <div class = "input-section">
        <PersonalInput onPersonChange={setPerson}></PersonalInput>
      </div>
      <div class = "display-section">
        <PersonalInfo person={person}></PersonalInfo>
        <EducationInfo></EducationInfo>
      </div>
    </div>
      
  )
}

export default App
