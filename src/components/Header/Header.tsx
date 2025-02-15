import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import './Header.scss';

export const Header = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AppContext);

  const handleLogout = () => {
    logout();
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <header>
      <h1>Tenpo Challenge</h1>
      <div>
        <button type='button' onClick={handleLogout}>
          Salir
        </button>
      </div>
    </header>
  );
};
