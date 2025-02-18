import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PokedexRouter = lazy(() => import('../../app/Pokedex/PokedexRouter'));

export const PrivateRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<PokedexRouter />} />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};
