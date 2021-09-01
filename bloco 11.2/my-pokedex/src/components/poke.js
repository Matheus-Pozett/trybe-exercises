import React from 'react';
// import PropTypes from 'prop-types';

// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.

class Poke extends React.Component {
    render() {
        const { pokeInfo } = this.props;

        return (
            <section className ="poke-container">
                <h1>Name: {pokeInfo.name}</h1>
                <p>Type: {pokeInfo.type}</p>
                <p>Weight: {pokeInfo.averageWeight.value} {pokeInfo.averageWeight.measurementUnit}</p>
                <img src={pokeInfo.image} alt={pokeInfo.name}></img>           
            </section>
        )
    }

}

export default Poke;