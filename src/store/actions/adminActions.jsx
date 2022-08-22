import { api } from '../../api';
import nProgress from 'nprogress';
import { toast } from 'react-toastify';

export const listAllUsers = async (dispatch) => {
  const token = localStorage.getItem('token');

  if(token) {
    try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;
  
      const { data } = await api.get('/admin/list');
      const usersList = {
        type: 'GET_USERS_LIST',
        list: data,
      }

      dispatch(usersList);
    } catch (error) {
      console.log('Ocorreu um erro', error);
    } finally {
      nProgress.done();
    }
  }
}

export const editUserRole = async (userId, newUserRole) => {
  const token = localStorage.getItem('token');

  if(token) {
    try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;
      await api.put(`/admin/usuario/${userId}/cargos?cargos=${newUserRole.cargo}`);
  
      toast.success('Cargo atualizado com sucesso!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log('Ocorreu um erro', error);

      toast.error('Não foi possível editar o cargo!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
}

export const createNewUser = async (newUser, navigate) => {
  const token = localStorage.getItem('token');
  
  const userData = {
    nome: newUser.nome,
    email: newUser.email,
    senha: newUser.senha,
    foto: newUser.foto
  }

  if(token) {
    try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;
      await api.post(`/admin/usuario-criar/cargos?cargos=${newUser.tipo}`, userData);

      toast.success('Usuário cadastrado com sucesso!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        navigate('/admin')

    } catch (error) {
      console.log('Ocorreu um erro: ', error)
    } finally {
      nProgress.done();
    }
  }
}

export const deleteUser = async (userId) => {
  const token = localStorage.getItem('token');

  if(token) {
    api.defaults.headers.common['Authorization'] = token;
    await api.delete(`/admin/delete/${userId}`);

    toast.success('Usuário deletado!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
}