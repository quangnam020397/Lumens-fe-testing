import React, { Fragment } from 'react';
import { NAV_ROUTER } from '../../constants/router/navRouter';
import { INavRouter } from '../../interfaces';
import { GlobalNavbarProps } from './@type';
import styles from './styles.module.scss';

function GlobalNavbar({ children }: GlobalNavbarProps) {
  const renderNav = React.useCallback(
    (navData: INavRouter[]) =>
      navData.map((item, index) => {
        return (
          <a href={item.path} key={index}>
            <img src={item.icon} alt={item.name} />
          </a>
        );
      }),
    []
  );

  return (
    <Fragment>
      <div className={styles.content}>{children}</div>
      <div className={styles.global__navbar}>
        <div>{renderNav(NAV_ROUTER)}</div>
      </div>
    </Fragment>
  );
}

export default GlobalNavbar;
