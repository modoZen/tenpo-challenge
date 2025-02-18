type PokemonTypes = Record<
  string,
  {
    color: string;
    letterFont: string;
  }
>;

export const pokemonTypes: PokemonTypes = {
  bug: { color: '#94BC4A', letterFont: 'b' },
  ice: { color: '#70CBD4', letterFont: 'i' },
  dark: { color: '#736C75', letterFont: 'd' },
  fire: { color: '#EA7A3C', letterFont: 'r' },
  rock: { color: '#B2A061', letterFont: 'k' },
  water: { color: '#539AE2', letterFont: 'w' },
  fairy: { color: '#E397D1', letterFont: 'y' },
  ghost: { color: '#846AB6', letterFont: 'h' },
  grass: { color: '#71C558', letterFont: 'g' },
  steel: { color: '#89A1B0', letterFont: 'm' },
  dragon: { color: '#6A7BAF', letterFont: 'n' },
  flying: { color: '#7DA6DE', letterFont: 'v' },
  ground: { color: '#CC9F4F', letterFont: 'a' },
  normal: { color: '#AAB09F', letterFont: 'c' },
  poison: { color: '#B468B7', letterFont: 'o' },
  psychic: { color: '#E5709B', letterFont: 'p' },
  fighting: { color: '#CB5F48', letterFont: 'f' },
  electric: { color: '#E5C531', letterFont: 'l' },
};
