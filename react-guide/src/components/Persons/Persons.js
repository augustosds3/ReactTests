import React from 'react';
import Person from '../Persons/Person/Person'

const persons = (props) => props.persons.map((person, index) => {
        return <Person age = {person.age} name = {person.name}
        click = {() => props.clicked(index)}
        key = {person.id} 
        changed = {(event) => props.changed(event, person.id)}/>
      })
;

export default persons;