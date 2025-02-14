import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Loading } from '../Loading/Loading';

export const PrivateRoute = () => {
  const { user, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <Loading />;
  }

  return user ? <Outlet /> : <Navigate to='/login' replace />;
};
