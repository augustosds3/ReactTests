import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    const classesAdd = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      classesAdd.push(classes.Red);
    }
    if (props.persons.length <= 1) {
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

export default cockpit;