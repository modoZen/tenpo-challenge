import { render, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Header } from '../Header';
import { AuthThunks } from '../../../../app/Auth/store/authThunks';
import { useAppDispatch } from '../../../../store';
import { AppRoutes } from '../../../../app-routes';

const user = userEvent.setup();

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../../../store', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('../../../../app/Auth/store/authThunks', () => ({
  AuthThunks: { logout: jest.fn() },
}));

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);
    (useAppDispatch as jest.Mock).mockImplementation(() => mockDispatch);
  });

  it('should render logo and logout button', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { name: 'Wikidex' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Salir' })).toBeInTheDocument();
  });

  it('should call dispatch logout action and navigate on logout click', async () => {
    render(<Header />);

    const logoutButton = screen.getByRole('button', { name: 'Salir' });

    await user.click(logoutButton);

    expect(mockNavigate).toHaveBeenCalledWith(AppRoutes.Auth, {
      replace: true,
    });
    expect(mockDispatch).toHaveBeenCalledWith(AuthThunks.logout());
  });
});
