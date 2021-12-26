import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../Contexts/User';
import { ReactComponent as FeedSvg } from '../../Assets/feed.svg';
import { ReactComponent as StatsSvg } from '../../Assets/estatisticas.svg';
import { ReactComponent as PostSvg } from '../../Assets/adicionar.svg';
import { ReactComponent as LogoutSvg } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <FeedSvg />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/account/stats">
          <StatsSvg />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/account/post">
          <PostSvg />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <LogoutSvg />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
