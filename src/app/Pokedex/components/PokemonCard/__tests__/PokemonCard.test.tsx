import { render, screen } from '@testing-library/react';
import { PokemonCard } from '../PokemonCard';
import { pokemonListStub } from '../../../__stubs__/pokemonList.stub';

const pokemonStub = pokemonListStub[0];

describe('PokemonCard', () => {
  it('renders pokemon information correctly', () => {
    render(<PokemonCard pokemon={pokemonStub} />);

    expect(screen.getByText('#25')).toBeInTheDocument();
    expect(screen.getByText('Pikachu')).toBeInTheDocument();

    const image = screen.getByAltText('Pikachu');
    expect(image).toHaveAttribute('src', pokemonStub.image);
  });
});
