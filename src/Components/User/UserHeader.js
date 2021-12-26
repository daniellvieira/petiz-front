import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css';
import UserHeaderNav from './UserHeaderNav';

const titleLocale = {
  '/account': 'Minhas Fotos',
  '/account/stats': 'Estatísticas',
  '/account/post': 'Adicionar Foto',
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
