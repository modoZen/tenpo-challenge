import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Login} element={<Login />} />
      <Route path={AppRoutes.Home} element={<Home />} />
    </Routes>
  );
};

export default App;
