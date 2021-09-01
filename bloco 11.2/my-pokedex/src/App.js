import React from 'react';
import pokemons from './data';
import PokeList from './components/pokeList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section className="main-container">
        <PokeList pokemons= {pokemons} />
      </section>
    )
  }
}

export default App;
