import React from "react";

function EducationInfo(props){
    const {startDate, endDate, school, location, degree} = props.education;
    return <div className="education-info">

        <p className="education-header">Education</p>
        <div className = "firstline-ed">
            <p>{startDate} - {endDate}</p>
            <p>{school}</p>
        </div>
        <div className = "secondline-ed">
            <p>{location}</p>
            <p>{degree}</p>
        </div>
        
    </div>
}

export default EducationInfo;