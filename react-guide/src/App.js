import React, { useState } from 'react';
import './App.css';
import Person from './components/Person/Person';

const App = (props) => {

  const style ={
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Augusto', age: '27' },
      { name: 'Sergio', age: '29' },
      { name: 'Santos', age: '28' }
    ],
    otherState: 'Do something'
  });

  console.log(personState);

  const switchNameHandler = (nameNew) => {
    setPersonState({
      persons: [
        {name:  nameNew, age: '30'},
        { name: 'AugustoSS', age: '19' },
      { name: 'SantosVV', age: '30' }
      ]
    });
  }

const nameChangeHandler = (event) => {
  setPersonState({persons: [
    { name: 'Augusto', age: '27' },
      { name: event.target.value, age: '29' },
      { name: 'Santos', age: '28' }
  ]});
}


  return (
    <div className="App">
      <h1>Testando</h1>
      <button onClick={switchNameHandler.bind(this, 'aaeHOOOOO')} style={style}>Switch</button>
      <Person age={personState.persons[0].age} name={personState.persons[0].name}/>
      <Person age="28" name={personState.persons[1].name} click = {switchNameHandler.bind(this, 'aaeHOOOOO!!!') } changed = {nameChangeHandler}>Out Content</Person>
      <Person age="29" name={personState.persons[2].name}/>
    </div>
  );

  //return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Eu to testando'));
}


export default App;
