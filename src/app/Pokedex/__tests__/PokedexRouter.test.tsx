import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PokedexRouter from '../PokedexRouter';
import { PokedexRoutes } from '../pokedex-routes';

jest.mock('../pages/Home', () => ({
  __esModule: true,
  default: () => <div>Home page</div>,
}));

describe('PokedexRouter', () => {
  const renderWithRouter = (path: string = '/') => {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <PokedexRouter />
      </MemoryRouter>,
    );
  };

  it('should render Home page for root route', async () => {
    renderWithRouter(PokedexRoutes.Home);

    expect(await screen.findByText('Home page')).toBeInTheDocument();
  });

  it('should render Details page for details route ', async () => {
    renderWithRouter('/details/25');

    expect(await screen.findByText('En proceso...')).toBeInTheDocument();
  });

  it('should reditect to home for unknown routes', async () => {
    renderWithRouter('/xd');

    expect(await screen.findByText('Home page')).toBeInTheDocument();
  });
});
