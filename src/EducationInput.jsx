import React, { useState } from "react";


export const initialEducation = 
{
    startDate:"08/2020", 
    endDate: "present",  
    school: "CSI", 
    location: "New York, NY", 
    degree: "Bachelor of science"
};


const EducationInput = ({ onEducationChange }) => {
    const [education, setEducation] = useState(initialEducation);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEducation((prevEducation) => ({
          ...prevEducation,
          [name]: value
        }));
      
        // Pass the updated person object to the parent component
        onEducationChange({ ...education, [name]: value });
    };

    return (

        <div className="education-input">
            <p className = "name">Education Details</p>
            <p> School </p>
            <input type = "text" name = "school" value = {education.school} onChange={handleInputChange}/>
            <p> Degree </p>
            <input type = "text" name = "degree" value = {education.address} onChange={handleInputChange}/>
            <p> Start Date </p>
            <input type = "text" name = "startDate" value = {education.startDate} onChange={handleInputChange}/>
            <p> End Date </p>
            <input type = "text" name = "endDate" value = {education.endDate} onChange={handleInputChange}/>
            <p> Location </p>
            <input type = "text" name = "location" value = {education.location} onChange={handleInputChange}/>
            
        </div>
    
    );
};

export default EducationInput;