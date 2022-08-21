import { api } from '../../api';
import nProgress from 'nprogress';
import { toast } from 'react-toastify';

export const listAllUsers = async (dispatch) => {
  const token = localStorage.getItem('token');

  if(token) {
    api.defaults.headers.common['Authorization'] = token;

    const { data } = await api.get('/admin/list');

    const usersList = {
      type: 'GET_USERS_LIST',
      list: data,
    }

    dispatch(usersList);
  }
}

export const editUserRole = async (userId, newUserRole) => {
  const token = localStorage.getItem('token');

  if(token) {
    api.defaults.headers.common['Authorization'] = token;
    await api.put(`/admin/usuario/${userId}/cargos?cargos=${newUserRole}`);

    toast.success('Cargo atualizado com sucesso!', {
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