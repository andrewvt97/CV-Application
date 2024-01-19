import React from "react";

function ExperienceInfo(props){
    const {startDate, endDate, company, location, position, description} = props.experience;
    return <div className="education-info">

        <p className="education-header">Education</p>
        <div className = "firstline-ed">
            <p>{startDate} - {endDate}</p>
            <p>{company}</p>
        </div>
        <div className = "secondline-ed">
            <p>{location}</p>
            <p>{position}</p>
        </div>
        <p> {description}</p>
        
    </div>
}

export default ExperienceInfo;