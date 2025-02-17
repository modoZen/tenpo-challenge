import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk = ThunkAction<Promise<void>, RootState, unknown, AnyAction>;
