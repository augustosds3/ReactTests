import React, { PureComponent } from 'react';
import Person from '../Persons/Person/Person'

class Persons extends PureComponent {

 /*    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldUpdate');
        if(nextProps.persons !== this.props.persons){
            return true;
        }
        
        return false;
    } */

    render() {
        console.log('[Person.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person age={person.age} name={person.name}
                click={() => this.props.clicked(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }

}




export default Persons;