import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { RegionFilter } from '../RegionFilter';
import { PokemonRegion } from '../../../domain/pokemon-region.enum';

const user = userEvent.setup();

const onSelectRegionMock = jest.fn();

describe('RegionFilter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all region buttons', () => {
    render(<RegionFilter onSelectRegion={onSelectRegionMock} selectedRegion={PokemonRegion.All} />);

    Object.values(PokemonRegion).forEach((region) => {
      expect(screen.getByRole('button', { name: region })).toBeInTheDocument();
    });
  });

  it('should apply active class to selected region', () => {
    render(
      <RegionFilter onSelectRegion={onSelectRegionMock} selectedRegion={PokemonRegion.Kanto} />,
    );

    expect(screen.getByText(PokemonRegion.Kanto)).toHaveClass('active');
  });

  it.each(Object.values(PokemonRegion))(
    'shoudl call onSelectRegion with correct region when button is clicked',
    async (region) => {
      render(
        <RegionFilter onSelectRegion={onSelectRegionMock} selectedRegion={PokemonRegion.Kanto} />,
      );

      const button = screen.getByRole('button', { name: region });
      await user.click(button);

      expect(onSelectRegionMock).toHaveBeenCalledWith(region);
    },
  );
});
