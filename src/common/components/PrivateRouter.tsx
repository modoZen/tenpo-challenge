import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';

const PokedexRouter = lazy(() => import('../../app/Pokedex/PokedexRouter'));

export const PrivateRouter = () => {
  return (
    <Routes>
      <Route path={`${AppRoutes.Pokedex}*`} element={<PokedexRouter />} />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};
