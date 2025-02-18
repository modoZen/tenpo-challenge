import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PokedexRoutes } from './pokedex-routes';

const Home = lazy(() => import('./pages/Home'));

const PokedexRouter = () => {
  return (
    <Routes>
      <Route path={PokedexRoutes.Home} element={<Home />} />
      <Route path={PokedexRoutes.Details} element={<div>En proceso...</div>} />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default PokedexRouter;
