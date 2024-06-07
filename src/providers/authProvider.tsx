import { IUser } from '@/types/user.interface';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from 'react';
import * as Splash from 'expo-splash-screen';

export type TypeUserState = IUser | null;

interface IAuthContext {
  user: TypeUserState;
  setUser: Dispatch<SetStateAction<TypeUserState>>;
}

export const AuthContext = createContext({} as IAuthContext);

let ignore = Splash.preventAutoHideAsync();

const AuthProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null);

  // login
  useEffect(() => {}, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
