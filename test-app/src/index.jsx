import React from 'react';
import ReactDom from 'react-dom';
import './index.css';



function ListNumbers(props){

  const numbers = props.numbers;
  const listItems = numbers.map((number)=>
    <li key = {number.toString()}>{number}</li>
  );

  return <ul>{listItems}</ul>
}


const numbers = [1, 2, 3, 4, 5];

ReactDom.render(
  <ListNumbers numbers = {numbers} /> ,
  document.getElementById('root')
);