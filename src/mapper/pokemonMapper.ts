import { Pokemon } from '../domain/pokemon';
import { PokemonRegion } from '../domain/pokemon-region.enum';
import { PokemonResponse } from '../domain/pokemon-response';

const regionMap = [
  { region: PokemonRegion.Kanto, range: { start: 1, end: 151 } },
  { region: PokemonRegion.Johto, range: { start: 152, end: 251 } },
  { region: PokemonRegion.Hoenn, range: { start: 252, end: 386 } },
  { region: PokemonRegion.Sinnoh, range: { start: 387, end: 493 } },
  { region: PokemonRegion.Unova, range: { start: 494, end: 649 } },
  { region: PokemonRegion.Kalos, range: { start: 650, end: 721 } },
  { region: PokemonRegion.Alola, range: { start: 722, end: 809 } },
  { region: PokemonRegion.Galar, range: { start: 810, end: 898 } },
  { region: PokemonRegion.Hisui, range: { start: 899, end: 905 } },
  { region: PokemonRegion.Paldea, range: { start: 906, end: 1025 } },
];

const getRegion = (id: number): PokemonRegion => {
  const found = regionMap.find(({ range: { start, end } }) => id >= start && id <= end);
  return found ? found.region : PokemonRegion.All;
};

export const pokemonMapper = (results: PokemonResponse['results']): Pokemon[] => {
  return results.map(({ name, url }) => {
    const urlParts = url.split('/');
    const id = Number(urlParts[urlParts.length - 2]);

    return {
      url,
      name,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      region: getRegion(id),
    };
  });
};
