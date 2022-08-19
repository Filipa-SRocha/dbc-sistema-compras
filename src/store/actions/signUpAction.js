import { api } from "../../api";
import { toast } from 'react-toastify';
import nProgress from 'nprogress';

export const handleSignUp = async (values, dispatch, navigate) => {
  try {
    nProgress.start();
    const { data } = await api.post("/usuario/create-user", values);
    localStorage.setItem('token', data.token);
    api.defaults.headers.common['Authorization'] = data.token;

    dispatch({type: "SET_LOGIN", token: data.token});
    // alert("Usuário criado!");

    toast.success('Cadastro realizado com sucesso!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    navigate('/');
    
  } catch(error) {
    console.log(`Erro -> ${error}`);
    toast.error('Ocorreu um erro ao tentar criar a conta', {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			});
  } finally {
    nProgress.done();
  }
}