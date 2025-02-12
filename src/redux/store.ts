import { pokeDataReducer ,initialState as pokeDataInitialState } from "@/feature/pokedex/slices/pokeDataSlice";
import { configureStore } from "@reduxjs/toolkit";

export class RootState {
    pokemonData = pokeDataInitialState;
  }

export const store = configureStore({
  reducer: {
    pokemonData: pokeDataReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
