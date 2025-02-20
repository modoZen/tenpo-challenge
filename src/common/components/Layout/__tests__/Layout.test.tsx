import { render, screen } from '@testing-library/react';
import { Layout } from '../Layout';

jest.mock('../../Header/Header', () => ({
  Header: () => <header>Header</header>,
}));

describe('Layout component', () => {
  it('should render the children and Header component', () => {
    render(
      <Layout>
        <div>Soy el componente hijo</div>
      </Layout>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Soy el componente hijo')).toBeInTheDocument();
  });
});
