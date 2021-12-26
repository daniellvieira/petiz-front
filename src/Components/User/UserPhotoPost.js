import React from 'react';
import styles from './UserPhotoPost.module.css';
import useForm from '../Hooks/useForm';
import useFetch from '../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helpers/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const name = useForm();
  const weigth = useForm('number');
  const age = useForm('number');
  const [image, setImage] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', image.raw);
    formData.append('nome', name.value);
    formData.append('peso', weigth.value);
    formData.append('idade', age.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImageChange({ target }) {
    setImage({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="number" name="weigth" {...weigth} />
        <Input label="Idade" type="number" name="age" {...age} />
        <input
          className={styles.file}
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {image.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${image.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
