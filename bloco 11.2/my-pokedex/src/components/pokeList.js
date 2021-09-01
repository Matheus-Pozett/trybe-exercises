import React from 'react';
// import PropTypes from 'prop-types';
import Poke from './poke';

class PokeList extends React.Component {
    render() {
        const { pokemons } = this.props;

        return (
            <div className="poke-list">
                {pokemons.map((pokemon) => <Poke pokeInfo= {pokemon} />)}
            </div>
        )
    }
}

export default PokeList;