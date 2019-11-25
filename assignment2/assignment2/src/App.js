import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/validationComponent/ValidationComponent'
import CharComponent from './components/charComponent/CharComponent'

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});    
  }

  render() {

    const letters = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent letter = {ch} key = {index} clicked = {() => this.deleteCharHandler(index)}/>
    });
    
    return (
      <div>
        <input type="text" onChange={(event) => this.inputChangeHandler(event)} value={this.state.userInput} />
        <ValidationComponent inputLength = {this.state.userInput.length}/>
        {letters}
      </div>
    );
  }
}

export default App;
