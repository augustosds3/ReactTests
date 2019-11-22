import React from 'react'

const person = (props) => {
    return (
        <div>
        <p onClick={props.click}>Person Age {props.age} and Person Name {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;