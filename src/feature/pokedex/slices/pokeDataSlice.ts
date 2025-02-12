'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmptyPokemon, Pokemon } from "../types/pokemonInfo";
import { EmptyPokemonSpecies, PokemonSpecies } from "../types/pokemonSpacies";


export interface pokeDataState {
    pokemonInfo:Pokemon,
    pokemonSpacies:PokemonSpecies
}

export const initialState:pokeDataState = {
    pokemonInfo:EmptyPokemon,
    pokemonSpacies:EmptyPokemonSpecies
}

export const pokeDataSlice = createSlice({
    name:"pokeData",
    initialState,
    reducers:{
        storePokemonData:(state,action:PayloadAction<Pokemon>) => {
            state.pokemonInfo = action.payload;
        },
        storePokemonSpecies:(state,action:PayloadAction<PokemonSpecies>) => {
            state.pokemonSpacies = action.payload;
        }
    }
})


export const { storePokemonData, storePokemonSpecies } =
pokeDataSlice.actions;

export const pokeDataReducer = pokeDataSlice.reducer;