import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useAppDispatch } from './store';
import { authThunks } from './store/authThunks';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authThunks.checkAuth());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={AppRoutes.Auth} element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.Home} element={<Home />} />
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default App;
