import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));

const App = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Login} element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.Home} element={<Home />} />
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default App;
