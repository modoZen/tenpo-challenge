import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { PokemonThunks } from '../../store/pokemonThunks';
import { Pokemon } from '../../domain/pokemon';
import { PokemonRegion } from '../../domain/pokemon-region.enum';
import { pokemonListStub } from '../../__stubs__/pokemonList.stub';

jest.mock('../../../../store', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('../../../../common/components/Loading/Loading', () => ({
  Loading: () => <div>Cargando...</div>,
}));

jest.mock('../../../../common/components/Header/Header', () => ({
  Header: () => <header>Header</header>,
}));

jest.mock('../../components/PokemonList/PokemonList', () => ({
  PokemonList: ({ pokemons }: { pokemons: Pokemon[] }) => (
    <>
      {pokemons.map(({ id, name }) => (
        <div data-testid='pokecard' key={id}>
          {name}
        </div>
      ))}
    </>
  ),
}));

jest.mock('../../components/RegionFilter/RegionFilter', () => ({
  RegionFilter: ({ onSelectRegion }: { onSelectRegion: (region: PokemonRegion) => void }) => (
    <button type='button' onClick={() => onSelectRegion(PokemonRegion.Kalos)}>
      {PokemonRegion.Kalos}
    </button>
  ),
}));

jest.mock('../../store/pokemonThunks', () => ({
  PokemonThunks: {
    fetchPokemons: jest.fn(),
  },
}));

const mockDispatch = jest.fn();

describe('Home page', () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    jest.clearAllMocks();
  });

  it('should dispatch fetchPokemons action on mount', () => {
    (useAppSelector as jest.Mock).mockReturnValue({ pokemons: [], isLoading: false });
    render(<Home />);

    expect(mockDispatch).toHaveBeenCalledWith(PokemonThunks.fetchPokemons());
  });

  it('should render Loading component when isLoading is true', () => {
    (useAppSelector as jest.Mock).mockReturnValue({ pokemons: [], isLoading: true });
    render(<Home />);

    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it.each(pokemonListStub)(
    'should render PokemonList with all pokemon when no region is selected',
    (pokemonStub) => {
      (useAppSelector as jest.Mock).mockReturnValue({
        pokemons: pokemonListStub,
        isLoading: false,
      });
      render(<Home />);

      expect(screen.getByText(pokemonStub.name)).toBeInTheDocument();
    },
  );

  it('should render PokemonList with filtered pokemon when region is selected', async () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      pokemons: pokemonListStub,
      isLoading: false,
    });
    render(<Home />);

    const kalosButton = screen.getByRole('button', { name: PokemonRegion.Kalos });

    await user.click(kalosButton);

    const filteredPokemons = pokemonListStub.filter(({ region }) => region === PokemonRegion.Kalos);

    expect(screen.getAllByTestId('pokecard')).toHaveLength(filteredPokemons.length);
  });
});
