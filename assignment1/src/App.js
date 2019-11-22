import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    name: 'Gsudghosdgi'
  }

  userInputHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  

render() {
    return (
      <div>
        <UserInput name={this.state.name} inputHandler={this.userInputHandler}/>
        <UserOutput name={this.state.name} description="I like" />
      </div>
    );

  }
}


export default App;
