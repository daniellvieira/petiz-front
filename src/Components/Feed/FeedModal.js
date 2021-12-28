import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../Hooks/useFetch';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import { PHOTO_GET } from '../../api';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading loading={loading} />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
