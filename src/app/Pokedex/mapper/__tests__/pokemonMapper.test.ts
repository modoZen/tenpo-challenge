import { pokemonListStub } from '../../__stubs__/pokemonList.stub';
import { pokemonResultsStub } from '../../__stubs__/pokemonResults.stub';
import { pokemonMapper } from '../pokemonMapper';

describe('pokemonMapper', () => {
  it('should return an empty array when given an empty input', () => {
    expect(pokemonMapper([])).toEqual([]);
  });

  it('should correctly map API results to Pokemon domain objects', () => {
    const mappedPokemons = pokemonMapper(pokemonResultsStub);

    expect(mappedPokemons).toEqual(pokemonListStub);
  });
});
