import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../../../domain/pokemon';

interface HomeState {
  pokemons: Pokemon[];
  isLoading: boolean;
}

const initialState: HomeState = {
  pokemons: [],
  isLoading: true,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, { payload }: PayloadAction<Pokemon[]>) => {
      state.pokemons = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
  },
});

export const { setPokemons, setLoading } = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;
