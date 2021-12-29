import React from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Send } from '../../Assets/enviar.svg';
import useFetch from '../Hooks/useFetch';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, single, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  function handleChange({ target }) {
    setComment(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        value={comment}
        onChange={handleChange}
        id="comment"
        name="comment"
        placeholder="Comente..."
      />
      <button className={styles.button}>
        <Send />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
