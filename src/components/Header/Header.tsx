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
    <header className='header'>
      <div className='content'>
        <h1 className='logo'>Wikidex</h1>
        <div>
          <button className='btn-logout' type='button' onClick={handleLogout}>
            Salir
          </button>
        </div>
      </div>
    </header>
  );
};
