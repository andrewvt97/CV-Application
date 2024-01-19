import { useDebugValue, useState } from 'react'
import PersonalInfo from './PersonalInfo.jsx'
import PersonalInput, { initialPerson } from './PersonalInput.jsx'
import EducationInfo from './EducationInfo.jsx'
import EducationInput, { initialEducation } from './EducationInput.jsx'
import ExperienceInput, { initialExperience } from './ExperienceInput.jsx'
import ExperienceInfo from './ExperienceInfo.jsx'
import "../styles/App.css"


function App() {

  const [person, setPerson] = useState(initialPerson);
  const[education,setEducation] = useState(initialEducation)
  const [experience, setExperience] = useState(initialExperience)

  return (
    <div className = "main-page">
      <div className = "input-section">
        <PersonalInput onPersonChange={setPerson}></PersonalInput>
        <EducationInput onEducationChange={setEducation} ></EducationInput>
        <ExperienceInput onExperienceChange={setExperience} ></ExperienceInput>
      </div>
      <div className = "display-section">
        <PersonalInfo person={person}></PersonalInfo>
        <EducationInfo education = {education}></EducationInfo>
        <ExperienceInfo experience = {experience} ></ExperienceInfo>
      </div>
    </div>
      
  )
}

export default App
