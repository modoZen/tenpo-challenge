import { Pokemon } from '../domain/pokemon';
import { PokemonResponse } from '../domain/pokemon-response';
import { pokemonMapper } from '../mapper/pokemonMapper';
import { pokeClient } from './pokemonClient';

interface PokemonListParams {
  limit: number;
  offset?: number;
}

const getPokemonList = async ({ limit, offset = 0 }: PokemonListParams): Promise<Pokemon[]> => {
  const { data } = await pokeClient.get<PokemonResponse>(`pokemon?limit=${limit}&offset=${offset}`);
  return pokemonMapper(data.results);
};

export const PokeApi = {
  getPokemonList,
};
