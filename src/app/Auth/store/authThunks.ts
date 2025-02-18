import { AppThunk } from '../../../store';
import { checkingCredentials, login as startLogin, logout as startLogout } from './authSlice';

const checkAuth = (): AppThunk => async (dispatch) => {
  dispatch(checkingCredentials());

  const savedUser = localStorage.getItem('user');

  if (!savedUser) {
    dispatch(startLogout());
  } else {
    dispatch(startLogin({ user: JSON.parse(savedUser) }));
  }
};

const login =
  ({ email }: { email: string; password: string }): AppThunk =>
  async (dispatch) => {
    dispatch(checkingCredentials());

    const user = {
      email,
      displayName: 'npc 2025',
      uid: 123456,
    };

    dispatch(
      startLogin({
        user,
      }),
    );

    localStorage.setItem('token', 'fake-token');
    localStorage.setItem('user', JSON.stringify(user));
  };

const logout = (): AppThunk => async (dispatch) => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  dispatch(startLogout());
};

export const AuthThunks = {
  checkAuth,
  login,
  logout,
};
