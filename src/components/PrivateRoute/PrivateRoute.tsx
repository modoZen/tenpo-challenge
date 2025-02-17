import { Navigate, Outlet } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { AppRoutes } from '../../app-routes';
import { useAppSelector } from '../../store';
import { AuthStatus } from '../../domain/auth-status.enum';

export const PrivateRoute = () => {
  const { status } = useAppSelector((state) => state.auth);

  if (status === AuthStatus.Checking) {
    return <Loading />;
  }

  return status === AuthStatus.Authenticated ? (
    <Outlet />
  ) : (
    <Navigate to={AppRoutes.Auth} replace />
  );
};
