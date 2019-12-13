import React, { Component } from 'react';
import classes from './Auth.module.css'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {
    state = {
        controls: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validaton: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validaton: {
                    required: true,
                    minLenght: 6
                },
                valid: false,
                touched: false
            }
        }

    }

    checkValidity(value, rules){
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        
        if(rules.minLenght){
            isValid = value.length > rules.minLenght && isValid;
        }

        if(rules.maxLenght){
            isValid = value.length < rules.maxLenght && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName]),
                touched: true
            }
        }

        this.setState({controls: updatedControls});
    }

    render() {

        let formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(formElement => (
            <Input key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validaton}
                touched={formElement.config.touched}
                changed={(event) => { this.inputChangedHandler(event, formElement.id) }} />
            
        ));


        return (
            <div className={classes.Auth}>
                <form>
                {form}
                <Button btnType="Success">Login</Button>
                </form>
            </div>
        )
    }
}

export default Auth;