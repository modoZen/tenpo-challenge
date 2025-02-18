import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { AuthThunks } from '../../../app/Auth/store/authThunks';
import { AppRoutes } from '../../../app-routes';

import './Header.scss';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(AuthThunks.logout());
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
