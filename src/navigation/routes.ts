import { Auth, Home, Settings } from '@/components/screens';
import { IRoute } from './navigation.types';

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Auth',
    component: Auth,
  },
  {
    name: 'Settings',
    component: Settings,
  },
];
