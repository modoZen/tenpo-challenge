import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../domain/user';
import { AuthStatus } from '../domain/auth-status.enum';

interface AuthState {
  status: AuthStatus;
  user: User | null;
}

const initialState: AuthState = {
  status: AuthStatus.Checking,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload: { user } }: PayloadAction<Pick<AuthState, 'user'>>) => {
      state.status = AuthStatus.Authenticated;
      state.user = user;
    },
    logout: (state) => {
      state.status = AuthStatus.NotAuthenticated;
      state.user = null;
    },
    checkingCredentials: (state) => {
      state.status = AuthStatus.Checking;
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
