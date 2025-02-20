import { PokemonResponse } from '../domain/pokemon-response';

export const pokemonResultsStub: PokemonResponse['results'] = [
  {
    name: 'Pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25/',
  },
  {
    name: 'Dragonite',
    url: 'https://pokeapi.co/api/v2/pokemon/149/',
  },
  {
    name: 'Gekkouga',
    url: 'https://pokeapi.co/api/v2/pokemon/658/',
  },
];
