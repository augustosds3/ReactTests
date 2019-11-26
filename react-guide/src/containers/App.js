import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';

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
    let btnClass = [classes.Button]

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person age={person.age} name={person.name}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      )

      btnClass.push(classes.Red)
    }

    
    const classesAdd = [];

    if (this.state.persons.length <= 2) {
      classesAdd.push('red');
    }
    if (this.state.persons.length <= 1) {
      classesAdd.push('bold');
    }

    return (
        <div className={classes.App}>
          <h1>React App</h1>
          <p className={classesAdd.join(' ')}>Working BRUH!</p>
          <button onClick={this.togglePersonHandler} className={btnClass.join(' ')}>Toogle Persons</button>
          {persons}
        </div>
    );


    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Eu to testando'));
  }
}


export default App;
