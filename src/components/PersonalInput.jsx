import React, { useState } from "react";


export const initialPerson = {name:"Andrew Thomas", email: "johndoe@gmail.com", phone: "3472918970", address: "New York, USA"};

const PersonalInput = ({ onPersonChange }) => {
    const [person, setPerson] = useState(initialPerson);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setPerson((prevPerson) => ({
        ...prevPerson,
        [name]: value
      }));
  
      // Pass the updated person object to the parent component
      onPersonChange({ ...person, [name]: value });
    };

return (
    <div className="personal-input input-class" >
        <p className = "name">Personal Details</p>
        <p> Name </p>
        <input type = "text" name = "name" value = {person.name} onChange={handleInputChange}/>
        <p> Email </p>
        <input type = "text" name = "email" value = {person.email} onChange={handleInputChange}/>
        <p> Phone Number </p>
        <input type = "text" name = "phone" value = {person.phone} onChange={handleInputChange}/>
        <p> Address </p>
        <input type = "text" name = "address" value = {person.address} onChange={handleInputChange}/>
    </div>

);

};



export default PersonalInput;
