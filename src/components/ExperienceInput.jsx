import React, { useState } from "react";


export const initialExperience = 
{
    startDate:"08/2020", 
    endDate: "present",  
    company: "Walmart", 
    location: "New York, NY", 
    position: "Software Engineering Intern",
    description: "Developed application using Javascript frontend and backend in Node. Revamped company's database system."
};


const ExperienceInput = ({ onExperienceChange }) => {
    const [experience, setExperience] = useState(initialExperience);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExperience((prevExperience) => ({
          ...prevExperience,
          [name]: value
        }));
      
        // Pass the updated person object to the parent component
        onExperienceChange({ ...experience, [name]: value });
    };

    return (

        <div className="experience-input input-class">
            <p className = "name">Experience</p>
            <p> Company </p>
            <input type = "text" name = "company" value = {experience.company} onChange={handleInputChange}/>
            <p> Position </p>
            <input type = "text" name = "position" value = {experience.position} onChange={handleInputChange}/>
            <p> Start Date </p>
            <input type = "text" name = "startDate" value = {experience.startDate} onChange={handleInputChange}/>
            <p> End Date </p>
            <input type = "text" name = "endDate" value = {experience.endDate} onChange={handleInputChange}/>
            <p> Location </p>
            <input type = "text" name = "location" value = {experience.location} onChange={handleInputChange}/>
            <p> Description </p>
            <input type = "text" name = "description" value = {experience.description} onChange={handleInputChange}/>
            
        </div>
    
    );
};

export default ExperienceInput;