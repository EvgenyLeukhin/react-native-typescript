import { ComponentType } from 'react';

// список страниц
export type TRootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Settings: undefined;
};

export interface IRoute {
  name: keyof TRootStackParamList;
  component: ComponentType | null;
}
