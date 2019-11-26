import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

class App extends Component {

  state = ({
    persons: [
      { id: '1', name: 'Augusto', age: '27' },
      { id: '2', name: 'Sergio', age: '29' },
      { id: '3', name: 'Santos', age: '28' }
    ],
    otherState: 'Do something',
    showPersons: false
  });

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const updatedPerson = {
      ...this.state.persons[personIndex] //spread to copy the object
    }

    updatedPerson.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = updatedPerson;

    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons] //poderia usar this.state.persons.slice()
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let persons = null;
    

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler}
        />
      )
    }

    return (
        <div className={classes.App}>
          <Cockpit persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          togglePersonHandler = {this.togglePersonHandler}/>
          {persons}
        </div>
    );


    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Eu to testando'));
  }
}


export default App;
