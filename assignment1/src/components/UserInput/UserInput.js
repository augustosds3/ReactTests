import React from 'react';
import './UserInput.css'

const userInput = (props) =>{
    return <input type="text"  onChange = {props.inputHandler} value={props.name} className = "UserInput"/>
}

export default userInput;