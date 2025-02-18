import { useEffect } from 'react';
import { Loading } from './Loading/Loading';
import { PrivateRouter } from './PrivateRouter';
import { AuthStatus } from '../../app/Auth/domain/auth-status.enum';
import { useAppDispatch, useAppSelector } from '../../store';
import { AuthThunks } from '../../app/Auth/store/authThunks';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(AuthThunks.checkAuth());
  }, [dispatch]);

  if (status === AuthStatus.Checking) {
    return <Loading />;
  }

  return status === AuthStatus.Authenticated ? <PrivateRouter /> : <PublicRouter />;
};
