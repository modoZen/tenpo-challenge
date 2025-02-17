import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { authThunks } from '../../store/authThunks';

import './LoginForm.scss';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const isDisabledButton = !email || !password;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(authThunks.login({ email, password }));
    navigate('/');
  };

  return (
    <div className='login-form-container'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='Correo'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isDisabledButton} type='submit'>
          Ingresar
        </button>
      </form>
    </div>
  );
};
