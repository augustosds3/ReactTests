import React from 'react'


const validationComponent = (props) => {

    let validationText = null;

    if (props.inputLength < 5) {
        validationText = (
            <p>{props.inputLength} characters are too short</p>
        );
    } else {
        validationText = <p>Text long enough</p>
    }


    return (
        <div>
            {validationText}
        </div>
    )

}

export default validationComponent;