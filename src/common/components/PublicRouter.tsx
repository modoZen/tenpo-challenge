import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const AuthRouter = lazy(() => import('../../app/Auth/AuthRouter'));

export const PublicRouter = () => {
  return (
    <Routes>
      <Route path='auth/*' element={<AuthRouter />} />

      <Route path='*' element={<Navigate to='/auth/login' replace />} />
    </Routes>
  );
};
