import axios from 'axios';
// Alteração para upar pra o git
const api = axios.create ({ 
    baseURL: 'https://pokeapi.co/api/v2' 
});

export default api;