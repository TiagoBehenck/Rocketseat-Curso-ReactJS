import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css';

export default class Main extends Component {

    state = {
        pokemon: []
    };

    // Executa assim que o componente é carregado
    componentDidMount() {
        this.loadProducts();
    }

    // Usar arrow function para acessar valores
    loadProducts = async () => {
        const response = await api.get("/pokemon");

        this.setState({ pokemon : response.data.results });
        console.log(this.state);
    }

    render() {
        const { pokemon } = this.state;
        return (
            <div className="pokemon-list">
                {pokemon.map(pokemon => (
                    <article>
                        <strong>{pokemon.name}</strong>
                        {/* <img href={pokemon}></img> */}
                        <a href=""> Details </a>
                    </article>
                ))}
            </div>
        )
    }
}
