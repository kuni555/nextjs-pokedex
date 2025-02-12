import axios, { AxiosResponse } from 'axios';
import { Pokemon } from "../types/pokemonInfo";
import { PokemonSpecies } from '../types/pokemonSpacies';

export const getPokeData = async (id:number):Promise<Pokemon> => {
    try {
        const response: AxiosResponse<Pokemon> = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
}

export const getPokemonSpecies = async(id:number):Promise<PokemonSpecies> => {
    try {
        const response: AxiosResponse<PokemonSpecies> = await axios.get<PokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
}