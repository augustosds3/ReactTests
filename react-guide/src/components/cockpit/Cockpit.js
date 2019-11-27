import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context'

const Cockpit = props => {

    const toggleBtnef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] 1st use effect');
        toggleBtnef.current.click();
        return () => {
            console.log('Cleanup rolando');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd use effect');
        return () => {
            console.log('Cleanup dois');
        }
    });

    const classesAdd = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLenght <= 2) {
        classesAdd.push(classes.Red);
    }
    if (props.personsLenght <= 1) {
        classesAdd.push(classes.bold);
    }



    return (
        <div className={classes.Cockpit}>
            <h1>React App</h1>
            <p className={classesAdd.join(' ')}>Working BRUH!</p>
            <button ref={toggleBtnef}
                onClick={props.togglePersonHandler} className={btnClass}>Toogle Persons</button>
            <AuthContext.Consumer>
                {
                (context) => <button onClick={context.login}>Log in</button>
                }
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(Cockpit);