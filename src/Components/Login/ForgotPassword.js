import React from 'react';
import { FORGOT_PASSWORD } from '../../api';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helpers/Error';
import useFetch from '../Hooks/useFetch';
import useForm from '../Hooks/useForm';
import Head from '../Helpers/Head';

const ForgotPassword = () => {
  const login = useForm('');
  const { data, loading, error, request } = useFetch();

  const flashMessageStyle = { color: '#4c1' };

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = FORGOT_PASSWORD({
        login: login.value,
        url: window.location.href.replace('forgot_password', 'reset_password'),
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Esqueceu a senha ?" />
      <h1 className="title">Esqueceu a senha ?</h1>
      {data ? (
        <p style={flashMessageStyle}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default ForgotPassword;
