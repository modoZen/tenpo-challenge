import { AppThunk } from '../../../store';
import { PokeApi } from '../request/pokemonApi';
import { setPokemons, setLoading } from './pokemonSlice';

const fetchPokemons = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await PokeApi.getPokemonList({ limit: 1025 });
    dispatch(setPokemons(data));
  } catch (err) {
    // TODO
    console.error('fetchPokemons failed', err);
  } finally {
    dispatch(setLoading(false));
  }
};

export const PokemonThunks = {
  fetchPokemons,
};
