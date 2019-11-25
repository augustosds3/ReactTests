import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {

  style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }

  state = ({
    persons: [
      {id: '1', name: 'Augusto', age: '27' },
      {id: '2', name: 'Sergio', age: '29' },
      {id: '3', name: 'Santos', age: '28' }
    ],
    otherState: 'Do something',
    showPersons: false
  });

  nameChangeHandler = (event,  id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const updatedPerson = {
      ...this.state.persons[personIndex] //spread to copy the object
    }

    updatedPerson.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = updatedPerson;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons] //poderia usar this.state.persons.slice()
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person age = {person.age} name = {person.name}
            click = {() => this.deletePersonHandler(index)}
            key = {person.id} 
            changed = {(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonHandler} style={this.style}>Toogle Persons</button>
        {persons}
    </div>
    );


    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Eu to testando'));
  }
}


export default App;
