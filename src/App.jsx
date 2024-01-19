import { useDebugValue, useState } from 'react'
import PersonalInfo from './PersonalInfo'
import PersonalInput, { initialPerson } from './PersonalInput.jsx'
import EducationInfo from './EducationInfo.jsx'
import EducationInput, { initialEducation } from './EducationInput.jsx'
import './App.css'

function App() {

  const [person, setPerson] = useState(initialPerson);
  const[education,setEducation] = useState(initialEducation)

  return (
    <div className = "main-page">
      <div className = "input-section">
        <PersonalInput onPersonChange={setPerson}></PersonalInput>
        <EducationInput onEducationChange={setEducation} ></EducationInput>
      </div>
      <div className = "display-section">
        <PersonalInfo person={person}></PersonalInfo>
        <EducationInfo education = {education}></EducationInfo>
      </div>
    </div>
      
  )
}

export default App
