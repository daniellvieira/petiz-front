import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../Contexts/User';
import PhotoDelete from './PhotoDelete';
import Image from '../Helpers/Image';

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

export default PhotoContent;
