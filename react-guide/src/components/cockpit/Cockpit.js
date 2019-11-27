import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props => {

    useEffect(()=>{
        console.log('[Cockpit.js] 1st use effect');
        return() => {
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
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLenght <= 2) {
      classesAdd.push(classes.Red);
    }
    if (props.personsLenght <= 1) {
      classesAdd.push(classes.bold);
    }



    return (
        <div className = {classes.Cockpit}>
            <h1>React App</h1>
            <p className={classesAdd.join(' ')}>Working BRUH!</p>
            <button onClick={props.togglePersonHandler} className={btnClass}>Toogle Persons</button>
        </div>
    );
}

export default React.memo(Cockpit);