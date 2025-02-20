import { render, screen } from '@testing-library/react';
import { Pokemon } from '../../../domain/pokemon';
import { PokemonList } from '../PokemonList';
import { pokemonListStub } from '../../../__stubs__/pokemonList.stub';

jest.mock('../../PokemonCard/PokemonCard', () => ({
  PokemonCard: ({ pokemon: { name } }: { pokemon: Pokemon }) => (
    <div data-testid='pokemon-card'>{name}</div>
  ),
}));

describe('PokemonList', () => {
  it('matches snapshot with pokemons', () => {
    const { asFragment } = render(<PokemonList pokemons={pokemonListStub} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when empty', () => {
    const { asFragment } = render(<PokemonList pokemons={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correct number of pokemon cards', () => {
    render(<PokemonList pokemons={pokemonListStub} />);
    const cards = screen.getAllByTestId('pokemon-card');
    expect(cards).toHaveLength(pokemonListStub.length);
  });
});
