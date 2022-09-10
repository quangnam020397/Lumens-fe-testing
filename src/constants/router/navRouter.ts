import { INavRouter } from '../../interfaces';
import bellIcon from '../../assets/imgs/navs/bell.svg';
import homeIcon from '../../assets/imgs/navs/home.svg';
import settingsIcon from '../../assets/imgs/navs/settings.svg';
import walletIcon from '../../assets/imgs/navs/wallet.svg';

export const NAV_ROUTER: INavRouter[] = [
  {
    path: '/',
    name: 'Home',
    icon: homeIcon,
  },

  {
    path: '/notifications',
    name: 'Notifications',
    icon: bellIcon,
  },

  {
    path: '/wallet',
    name: 'Wallet',
    icon: walletIcon,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: settingsIcon,
  },
];
