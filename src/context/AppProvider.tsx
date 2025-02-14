import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { User } from '../domain/User';
import { AppContext } from './AppContext';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setIsLoading(false);
  }, []);

  const login = (username: string) => {
    const newUser: User = { username };
    localStorage.setItem('token', 'fake-token');
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout, isLoading }), [user, isLoading]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
