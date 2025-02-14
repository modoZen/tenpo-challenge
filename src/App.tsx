import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import './App.css';

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
