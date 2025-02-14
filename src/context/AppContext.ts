import { createContext } from 'react';
import { User } from '../domain/User';

interface AppContextInterface {
  user: User | null;
  isLoading: boolean;
  login: (username: string) => void;
  logout: () => void;
}

export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);
