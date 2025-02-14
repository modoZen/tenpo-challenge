import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

import './LoginForm.scss';

export const LoginForm = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isDisabledButton = !email || !password;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email);
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
