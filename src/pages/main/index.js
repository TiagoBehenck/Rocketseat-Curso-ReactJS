import React, { Component } from 'react';
import api from '../../services/api'

import './style.css';

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

        this.setState({ pokemon: response.data.results });
    }

    render() {
        const { pokemon } = this.state;

        return (
            <div className="pokemon-list">
                {pokemon.map(pokemon => (
                    <article key={pokemon._id}>
                        <strong>{pokemon.name}</strong>
                        <a href={pokemon.url}> Details </a>
                    </article>
                ))}
            </div>
        )
    }
}
