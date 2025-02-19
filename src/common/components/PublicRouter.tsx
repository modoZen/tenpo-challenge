import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';

const AuthRouter = lazy(() => import('../../app/Auth/AuthRouter'));

export const PublicRouter = () => {
  return (
    <Routes>
      <Route path={`${AppRoutes.Auth}/*`} element={<AuthRouter />} />

      <Route path='*' element={<Navigate to={`/${AppRoutes.Auth}`} replace />} />
    </Routes>
  );
};
