import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';
import { useAppDispatch } from '../../store';
import { authThunks } from '../../store/authThunks';

import './Header.scss';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authThunks.logout());
    navigate(AppRoutes.Auth, {
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
