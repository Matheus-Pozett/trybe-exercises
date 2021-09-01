import React from 'react';
import './App.css';

const list = ['Estudar', 'Trabalhar', 'Comer', 'Dormir'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ul>
        {list.map((value) => task(value))}
      </ul>
    )
  }
}

export default App;
