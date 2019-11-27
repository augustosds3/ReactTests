import React, { Component } from 'react'
import classes from './Person.module.css'
import styled from 'styled-components'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'

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

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] Rendering...')
        return (
            <Auxiliary>
                <AuthContext.Consumer>
                    {
                        context => context.authenticated ?
                        <p>Autenticated</p> : 
                        <p>Please Log In</p>
                    }
                </AuthContext.Consumer>
                <StyleDiv>
                    <p onClick={this.props.click}>Person Age {this.props.age} and Person Name {this.props.name}</p>
                    <p>{this.props.children}</p>
                    <input ref={this.inputElementRef}
                        //ref={(inputEL) => { this.inputElement = inputEL }} 
                        type="text" onChange={this.props.changed} value={this.props.name} />
                </StyleDiv>
                <div>aaeHOOOOO</div>

            </Auxiliary>
        )
    }
}

export default withClass(Person, classes.Person);