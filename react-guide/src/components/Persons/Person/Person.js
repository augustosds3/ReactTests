import React from 'react'
import classes from './Person.module.css'
import styled from 'styled-components'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'

const StyleDiv = styled.div`
.Person {
    width: 60%;
    margin: 16px auto;
    border: 1px solid #ccc;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}

@media (min-width: 500px): {
    width: '450px'
}
`

const Person = (props) => {
    console.log('[Person.js] Rendering...')
    return(
        <Auxiliary>
            <StyleDiv>
                <p onClick={props.click}>Person Age {props.age} and Person Name {props.name}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
            </StyleDiv>
            <div>aaeHOOOOO</div>
        </Auxiliary>
    )
}

export default withClass(Person, classes.Person);