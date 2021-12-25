import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css';
import UserHeaderNav from './UserHeaderNav';

const titleLocale = {
  '/account': 'Minha conta',
  '/account/stats': 'Estatísticas',
  '/account/post': 'Poste sua foto',
};

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    setTitle(titleLocale[location.pathname]);
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
