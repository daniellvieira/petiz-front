import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Contexts/User';
import { ReactComponent as FeedSvg } from '../../Assets/feed.svg';
import { ReactComponent as StatsSvg } from '../../Assets/estatisticas.svg';
import { ReactComponent as PostSvg } from '../../Assets/adicionar.svg';
import { ReactComponent as LogoutSvg } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
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
  );
};

export default UserHeaderNav;
