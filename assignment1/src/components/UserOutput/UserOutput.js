import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default userOutput;