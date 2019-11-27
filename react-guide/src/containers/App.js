import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import withClass from '../hoc/withClass';
import Auxliary from '../hoc/Auxiliary';

class App extends Component {

  constructor(props) {
    super(props)
    console.log('Teste');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount...');
  }

  state = ({
    persons: [
      { id: '1', name: 'Augusto', age: '27' },
      { id: '2', name: 'Sergio', age: '29' },
      { id: '3', name: 'Santos', age: '28' }
    ],
    otherState: 'Do something',
    showPersons: false,
    showCockpit: true
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
    console.log('[App.js] render');

    let persons = null;


    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      )
    }

    return (
      <Auxliary>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {this.state.showCockpit ?
          <Cockpit personsLenght={this.state.persons.length}
            showPersons={this.state.showPersons}
            togglePersonHandler={this.togglePersonHandler} /> : null
        }
        {persons}
      </Auxliary>
    );


    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Eu to testando'));
  }
}


export default withClass(App, classes.App);
