// PersonalInfo.jsx
import React from "react";
import "./styles/Info.css";

function PersonalInfo(props) {
    const { name, email, phone, address } = props.person;

    return (
        <div className="personal-info">
            <p className="name">{name}</p>
            <div className="details">
                <ul>{email}</ul>
                <ul> {phone}</ul>
                <ul> {address}</ul>
            </div>
        </div>
    );
}

export default PersonalInfo;
