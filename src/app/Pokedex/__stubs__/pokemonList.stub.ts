import { Pokemon } from '../domain/pokemon';
import { PokemonRegion } from '../domain/pokemon-region.enum';

export const pokemonListStub: Pokemon[] = [
  {
    id: 25,
    name: 'Pikachu',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    region: PokemonRegion.Kanto,
    url: 'https://pokeapi.co/api/v2/pokemon/25/',
  },
  {
    id: 149,
    name: 'Dragonite',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
    region: PokemonRegion.Kanto,
    url: 'https://pokeapi.co/api/v2/pokemon/149/',
  },
  {
    id: 658,
    name: 'Gekkouga',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
    region: PokemonRegion.Kalos,
    url: 'https://pokeapi.co/api/v2/pokemon/658/',
  },
];
