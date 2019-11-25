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
      { name: 'Augusto', age: '27' },
      { name: 'Sergio', age: '29' },
      { name: 'Santos', age: '28' }
    ],
    otherState: 'Do something',
    showPersons: false
  });

  switchNameHandler = (nameNew) => {
    this.setState({
      persons: [
        { name: nameNew, age: '30' },
        { name: 'AugustoSS', age: '19' },
        { name: 'SantosVV', age: '30' }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Augusto', age: '27' },
        { name: event.target.value, age: '29' },
        { name: 'Santos', age: '28' }
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person age = {person.age} name = {person.name}
            click={this.switchNameHandler.bind(this, '')} changed={this.nameChangeHandler}/>
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
