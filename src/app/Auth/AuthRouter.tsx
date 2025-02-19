import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from './auth-routes';
import { AppRoutes } from '../../app-routes';

const Login = lazy(() => import('./pages/Login'));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path={AuthRoutes.Login} element={<Login />} />

      <Route
        path='*'
        element={<Navigate to={`/${AppRoutes.Auth}/${AuthRoutes.Login}`} replace />}
      />
    </Routes>
  );
};

export default AuthRouter;
