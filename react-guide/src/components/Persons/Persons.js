import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
            return (
                <Person age={person.age} name={person.name}
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated} />
            )
        });
    }

}


Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


export default Persons;