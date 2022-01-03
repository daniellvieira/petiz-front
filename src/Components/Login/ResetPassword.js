import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RESET_PASSWORD } from '../../api';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helpers/Error';
import useFetch from '../Hooks/useFetch';
import useForm from '../Hooks/useForm';
import Head from '../Helpers/Head';

const ResetPassword = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, data, request } = useFetch();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParams = params.get('key');
    const loginParams = params.get('login');
    if (keyParams) setKey(keyParams);
    if (loginParams) setLogin(loginParams);
  }, []);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = RESET_PASSWORD({
      login,
      key,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) navigate('/login');
  }

  return (
    <div>
      <Head title="Nova senha" />
      <h1 className="title">Digite a nova senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disaled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default ResetPassword;
