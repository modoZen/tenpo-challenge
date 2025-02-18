import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from './auth-routes';

const Login = lazy(() => import('./pages/Login'));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path={AuthRoutes.Login} element={<Login />} />

      <Route path='*' element={<Navigate to='/auth/login' replace />} />
    </Routes>
  );
};

export default AuthRouter;
